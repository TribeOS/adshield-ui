define('ember-macro-helpers/create-class-computed', ['exports', 'ember-macro-helpers/get-value', 'ember-macro-helpers/collapse-keys', 'ember-macro-helpers/flatten-keys', 'ember-macro-helpers/-constants'], function (exports, _getValue, _collapseKeys, _flattenKeys, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (observerBools, macroGenerator) {
    return function (...keys) {
      let { collapsedKeys, keyMap } = (0, _collapseKeys.collapseKeysWithMap)(keys);

      function getOriginalArrayDecorator(key, i) {
        if (typeof key === 'string') {
          let originalKey = keys[keyMap[i]];
          if (originalKey.indexOf(_constants.ARRAY_EACH) !== -1 || originalKey.indexOf(_constants.ARRAY_LENGTH) !== -1) {
            return originalKey;
          }
        }
        return key;
      }

      let mappedKeys = [];

      function rewriteComputed(obj, key) {
        let mappedWithResolvedOberverKeys = mappedKeys.map((macro, i) => {
          let shouldObserve = observerBools[i];
          if (shouldObserve) {
            macro = (0, _getValue.default)({ context: this, macro, key });
          }
          return macro;
        });

        let cp = macroGenerator.apply(this, mappedWithResolvedOberverKeys);
        defineProperty(this, 'computed', cp);
      }

      let classProperties = {};

      collapsedKeys.forEach((key, i) => {
        let shouldObserve = observerBools[i];
        if (!shouldObserve) {
          key = getOriginalArrayDecorator(key, i);
        }

        let mappedKey = resolveMappedLocation(key, i);

        mappedKeys.push(mappedKey);
        if (shouldObserve) {
          classProperties[`key${i}DidChange`] = Ember.observer(mappedKey, rewriteComputed);
        }
      });

      let ObserverClass = BaseClass.extend(classProperties, {
        // can't use rewriteComputed directly, maybe a bug
        // https://github.com/emberjs/ember.js/issues/15246
        onInit: Ember.on('init', function () {
          rewriteComputed.call(this);
        })
      });

      let cp = Ember.computed(...(0, _flattenKeys.default)(keys), function (key) {
        let propertyInstance = findOrCreatePropertyInstance(this, ObserverClass, key, cp);

        let properties = collapsedKeys.reduce((properties, macro, i) => {
          if (typeof macro !== 'string') {
            properties[i.toString()] = (0, _getValue.default)({ context: this, macro, key });
          }
          return properties;
        }, {});

        Ember.setProperties(propertyInstance.nonStrings, properties);

        return Ember.get(propertyInstance, 'computed');
      }).readOnly();

      return cp;
    };
  };

  // import { getOwner } from '@ember/application';
  const {
    WeakMap,
    defineProperty,
    meta
  } = Ember;

  const PROPERTIES = new WeakMap();

  function findOrCreatePropertyInstance(context, propertyClass, key, cp) {
    let propertiesForContext = PROPERTIES.get(context);
    if (!propertiesForContext) {
      propertiesForContext = new WeakMap();
      PROPERTIES.set(context, propertiesForContext);
    }

    let property = propertiesForContext.get(cp);
    if (property) {
      return property;
    }

    // let owner = getOwner(context);
    property = propertyClass.create( /* owner.ownerInjection(), */{
      key,
      context,
      nonStrings: Ember.Object.create()
    });

    propertiesForContext.set(cp, property);

    if (context instanceof Ember.Component) {
      context.one('willDestroyElement', () => {
        property.destroy();
      });
    }

    return property;
  }

  const BaseClass = Ember.Object.extend({
    computedDidChange: Ember.observer('computed', function () {
      let { context, key } = this;

      if (context.isDestroying) {
        // controllers can get into this state
        this.destroy();

        return;
      }

      // try our best to detect and prevent a double render
      let _meta = meta(context);
      // no longer needed in ember 2.12
      if (_meta.readableLastRendered) {
        let lastRendered = _meta.readableLastRendered();
        if (lastRendered && Object.hasOwnProperty.call(lastRendered, key)) {
          return;
        }
      }

      context.notifyPropertyChange(key);
    })
  });

  function resolveMappedLocation(key, i) {
    if (typeof key === 'string') {
      return `context.${key}`;
    } else {
      return `nonStrings.${i}`;
    }
  }
});
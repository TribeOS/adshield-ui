define('ember-decorators/object/index', ['exports', 'ember-macro-helpers/computed', '@ember-decorators/utils/collapse-proto', '@ember-decorators/utils/extract-value', '@ember-decorators/utils/decorator-wrappers', '@ember-decorators/utils/decorator-macros'], function (exports, _computed, _collapseProto, _extractValue, _decoratorWrappers, _decoratorMacros) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.readOnly = exports.observes = exports.computed = exports.action = undefined;


  const { computed: emberComputed } = Ember;

  /**
   * Decorator that turns the target function into an Action
   *
   * Adds an `actions` object to the target object and creates a passthrough
   * function that calls the original. This means the function still exists
   * on the original object, and can be used directly.
   *
   * ```js
   * import Component from '@ember/component';
   * import { action } from 'ember-decorators/object';
   *
   * export default class ActionDemoComponent extends Component {
   *   @action
   *   foo() {
   *     // do something
   *   }
   * }
   * ```
   *
   * ```hbs
   * <button onclick={{action "foo"}}>Execute foo action</button>
   * ```
   *
   * @function
   */
  const action = exports.action = (0, _decoratorWrappers.decorator)(function (target, key, desc) {
    let value = (0, _extractValue.default)(desc);

    (true && !(typeof value === 'function') && Ember.assert('The @action decorator must be applied to functions', typeof value === 'function'));


    (0, _collapseProto.default)(target);

    if (false) {
      if (!target.hasOwnProperty('_actions')) {
        let parentActions = target._actions;
        target._actions = parentActions ? Object.create(parentActions) : {};
      }

      target._actions[key] = value;
    } else {
      if (!target.hasOwnProperty('actions')) {
        let parentActions = target.actions;
        target.actions = parentActions ? Object.create(parentActions) : {};
      }

      target.actions[key] = value;
    }

    return value;
  });

  /**
   * Decorator that turns a function into a computed property. The decorators should
   * be applied to native getter and setter functions. Note that though they use getters
   * and setters, you must still use the Ember `get`/`set` functions to get and set their
   * values.
   *
   * ```javascript
   * import Component from '@ember/component';
   * import { computed } from 'ember-decorators/object';
   *
   * export default class UserProfileComponent extends Component {
   *   first = 'John';
   *   last = 'Smith';
   *
   *   @computed('first', 'last')
   *   get name() {
   *     const first = this.get('first');
   *     const last = this.get('last');
   *
   *     return `${first} ${last}`; // => 'John Smith'
   *   }
   *
   *   set name(value) {
   *     if (typeof value !== 'string' || !value.test(/^[a-z]+ [a-z]+$/i)) {
   *       throw new TypeError('Invalid name');
   *     }
   *
   *     const [first, last] = value.split(' ');
   *     this.setProperties({ first, last });
   *
   *     return value;
   *   }
   * }
   * ```
   *
   * @function
   * @param {...String} propertyNames - List of property keys this computed is dependent on
   */
  const computed = exports.computed = (0, _decoratorWrappers.decoratorWithParams)(function (target, key, desc, params) {
    (true && !(!(desc.value instanceof Ember.ComputedProperty)) && Ember.assert(`ES6 property getters/setters only need to be decorated once, '${key}' was decorated on both the getter and the setter`, !(desc.value instanceof Ember.ComputedProperty)));


    if ('get' in desc || 'set' in desc) {
      let { get, set } = desc;

      (true && !(typeof get === 'function') && Ember.assert(`Using @computed for only a setter does not make sense. Add a getter for '${key}' as well or remove the @computed decorator.`, typeof get === 'function'));

      // Unset the getter and setter so the descriptor just has a plain value

      desc.get = undefined;
      desc.set = undefined;

      let setter;

      if (typeof set === 'function') {
        setter = function (key, value) {
          let ret = set.call(this, value);
          return typeof ret === 'undefined' ? get.call(this) : ret;
        };
      } else if (true) {
        setter = function () {
          (true && !(false) && Ember.assert(`You must provide a setter in order to set '${key}' as a computed property.`, false));
        };
      }

      // Use a standard ember computed since getter/setter arrity is restricted,
      // meaning ember-macro-helpers doesn't provide any benefit
      if (true) {
        return emberComputed(...params, { get, set: setter });
      } else {
        let callback;

        if (typeof setter === 'function') {
          callback = function (key, value) {
            if (arguments.length > 1) {
              return setter.call(this, key, value);
            }

            return get.call(this);
          };
        } else {
          callback = get;
        }

        return emberComputed(...params, callback);
      }
    } else {
      (true && !(false) && Ember.deprecate('using @computed with functions directly will be removed in future versions, using ES getter/setter functions instead', false, { until: '2.0.0', id: 'macro-computed-deprecated' }));

      return (0, _computed.default)(...params, (0, _extractValue.default)(desc));
    }
  });

  /**
   * Decorator that wraps [Ember.observer](https://emberjs.com/api/#method_observer)
   *
   * Triggers the target function when the dependent properties have changed
   *
   * ```javascript
   * import Component from '@ember/component';
   * import { observes } from 'ember-decorators/object';
   *
   * export default class extends Component {
   *   @observes('foo')
   *   bar() {
   *     //...
   *   }
   * }
   * ```
   *
   * @function
   * @param {...String} eventNames - Names of the events that trigger the function
   */
  const observes = exports.observes = (0, _decoratorMacros.decoratorWithRequiredParams)(Ember.observer);

  /**
   * Decorator that modifies a computed property to be read only.
   *
   * Usage:
   *
   * ```javascript
   * import Component from '@ember/component';
   * import { computed, readOnly } from 'ember-decorators/object';
   *
   * export default class extends Component {
   *   @readOnly
   *   @computed('first', 'last')
   *   name(first, last) {
   *     return `${first} ${last}`;
   *   }
   * }
   * ```
   *
   * @function
   */
  const readOnly = exports.readOnly = (0, _decoratorWrappers.decorator)(function (target, name, desc) {
    var value = (0, _extractValue.default)(desc);
    return value.readOnly();
  });
});
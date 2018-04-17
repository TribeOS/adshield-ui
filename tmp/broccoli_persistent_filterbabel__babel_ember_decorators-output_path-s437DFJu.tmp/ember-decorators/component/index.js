define('ember-decorators/component/index', ['exports', '@ember-decorators/utils/collapse-proto', '@ember-decorators/utils/extract-value', '@ember-decorators/utils/decorator-wrappers'], function (exports, _collapseProto, _extractValue, _decoratorWrappers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.className = exports.attribute = undefined;
  exports.classNames = classNames;
  exports.tagName = tagName;


  /**
   * Decorator which indicates that the field or computed should be bound
   * to an attribute value on the component. This replaces `attributeBindings`
   * by directly allowing you to specify which properties should be bound.
   *
   * ```js
   * import Component from '@ember/component';
   * import { attribute } from 'ember-decorators/component';
   * import { computed } from 'ember-decorators/object';
   *
   * export default class AttributeDemoComponent extends Component {
   *   @attribute role = 'button';
   *
   *   // With provided attribute name
   *   @attribute('data-foo') foo = 'lol';
   *
   *   @attribute
   *   @computed
   *   get id() {
   *     // return generated id
   *   }
   * }
   * ```
   *
   * @function
   */
  const attribute = exports.attribute = (0, _decoratorWrappers.decoratorWithParams)(function (target, key, desc, params) {
    (true && !(params.length <= 1) && Ember.assert(`The @attribute decorator may take up to one parameter, the bound attribute name. Received: ${params.length}`, params.length <= 1));
    (true && !(params.every(s => typeof s === 'string')) && Ember.assert(`The @attribute decorator may only receive strings as parameters. Received: ${params}`, params.every(s => typeof s === 'string')));


    (0, _collapseProto.default)(target);

    if (!target.hasOwnProperty('attributeBindings')) {
      let parentValue = target.attributeBindings;
      target.attributeBindings = Array.isArray(parentValue) ? parentValue.slice() : [];
    }

    let binding = params[0] ? `${key}:${params[0]}` : key;

    target.attributeBindings.push(binding);

    return (0, _extractValue.default)(desc);
  });

  /**
   * Decorator which indicates that the field or computed should be bound to
   * the component class names. This replaces `classNameBindings` by directly
   * allowing you to specify which properties should be bound.
   *
   * ```js
   * import Component from '@ember/component';
   * import { className } from 'ember-decorators/component';
   * import { computed } from 'ember-decorators/object';
   *
   * export default class ClassNameDemoComponent extends Component {
   *   @className boundField = 'default-class';
   *
   *   // With provided true/false class names
   *   @className('active', 'inactive') isActive = true;
   *
   *   @className
   *   @computed
   *   get boundComputed() {
   *     // return generated class
   *   }
   * }
   * ```
   *
   * @function
   */
  const className = exports.className = (0, _decoratorWrappers.decoratorWithParams)(function (target, key, desc, params) {
    (true && !(params.length <= 2) && Ember.assert(`The @className decorator may take up to two parameters, the truthy class and falsy class for the class binding. Received: ${params.length}`, params.length <= 2));
    (true && !(params.every(s => typeof s === 'string')) && Ember.assert(`The @className decorator may only receive strings as parameters. Received: ${params}`, params.every(s => typeof s === 'string')));


    (0, _collapseProto.default)(target);

    if (!target.hasOwnProperty('classNameBindings')) {
      let parentValue = target.classNameBindings;
      target.classNameBindings = Array.isArray(parentValue) ? parentValue.slice() : [];
    }

    let binding = params.length > 0 ? `${key}:${params.join(':')}` : key;

    target.classNameBindings.push(binding);

    return (0, _extractValue.default)(desc);
  });

  /**
   * Class decorator which specifies the class names to be applied to a component.
   * This replaces the `classNames` property on components in the traditional Ember
   * object model.
   *
   * ```js
   * import Component from '@ember/component';
   * import { classNames } from 'ember-decorators/component';
   *
   * @classNames('a-static-class', 'another-static-class')
   * export default class ClassNamesDemoComponent extends Component {}
   * ```
   *
   * @param {...String} classNames - The list of classes to be applied to the component
   */
  function classNames(...classNames) {
    (true && !(classNames.reduce((allStrings, name) => {
      return allStrings && typeof name === 'string';
    }, true)) && Ember.assert(`The @classNames decorator must be provided strings, received: ${classNames}`, classNames.reduce((allStrings, name) => {
      return allStrings && typeof name === 'string';
    }, true)));


    return function (klass) {
      let { prototype } = klass;

      (0, _collapseProto.default)(prototype);

      if ('classNames' in prototype) {
        let parentClasses = prototype.classNames;
        classNames.unshift(...parentClasses);
      }

      prototype.classNames = classNames;

      return klass;
    };
  }

  /**
   * Class decorator which specifies the tag name of the component. This replaces
   * the `tagName` property on components in the traditional Ember object model.
   *
   * ```js
   * import Component from '@ember/component';
   * import { tagName } from 'ember-decorators/component';
   *
   * @tagName('button')
   * export default class TagNameDemoComponent extends Component {}
   * ```
   *
   * @param {String} tagName - The HTML tag to be used for the component
   */
  function tagName(tagName) {
    (true && !(arguments.length === 1) && Ember.assert(`The @tagName decorator must be provided exactly one argument, received: ${tagName}`, arguments.length === 1));
    (true && !(typeof tagName === 'string') && Ember.assert(`The @tagName decorator must be provided a string, received: ${tagName}`, typeof tagName === 'string'));


    return function (klass) {
      klass.prototype.tagName = tagName;
      return klass;
    };
  }
});
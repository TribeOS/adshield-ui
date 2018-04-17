define('@ember-decorators/utils/decorator-macros', ['exports', '@ember-decorators/utils/decorator-wrappers', '@ember-decorators/utils/extract-value'], function (exports, _decoratorWrappers, _extractValue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.decoratorWithKeyReflection = decoratorWithKeyReflection;
  exports.decoratorWithRequiredParams = decoratorWithRequiredParams;
  exports.decoratedPropertyWithRequiredParams = decoratedPropertyWithRequiredParams;
  exports.decoratedPropertyWithOptionalCallback = decoratedPropertyWithOptionalCallback;
  exports.decoratedPropertyWithEitherCallbackOrProperty = decoratedPropertyWithEitherCallbackOrProperty;
  function decoratorWithKeyReflection(fn) {
    return (0, _decoratorWrappers.decoratorWithParams)(function (target, key, desc, params) {
      if (params.length === 0) {
        return fn(key);
      }

      return fn(...params);
    });
  }

  function decoratorWithRequiredParams(fn) {
    return (0, _decoratorWrappers.decoratorWithParams)(function (target, key, desc, params) {
      (true && !(params.length !== 0) && Ember.assert(`Cannot use '${fn.name}' on field '${key}' without parameters`, params.length !== 0));


      const value = (0, _extractValue.default)(desc);
      return fn(...params, value);
    });
  }

  function decoratedPropertyWithRequiredParams(fn) {
    return (0, _decoratorWrappers.decoratorWithParams)(function (target, key, desc, params) {
      (true && !(params.length !== 0) && Ember.assert(`Cannot use '${fn.name}' on field '${key}' without parameters`, params.length !== 0));


      return fn(...params);
    });
  }

  function decoratedPropertyWithOptionalCallback(fn) {
    return (0, _decoratorWrappers.decoratorWithParams)(function (target, key, desc, params) {
      (true && !(params.length !== 0) && Ember.assert(`Cannot use '${fn.name}' on field '${key}' without parameters`, params.length !== 0));


      if (typeof params[params.length - 1] === 'function') {
        return fn(...params);
      }

      const value = (0, _extractValue.default)(desc);
      (true && !(typeof value === 'function') && Ember.assert(`Cannot use '${fn.name}' on field '${key}' without a callback`, typeof value === 'function'));


      return fn(...params, value);
    });
  }

  function decoratedPropertyWithEitherCallbackOrProperty(fn) {
    return (0, _decoratorWrappers.decoratorWithParams)(function (target, key, desc, params) {
      (true && !(params.length !== 0) && Ember.assert(`Cannot use '${fn.name}' on field '${key}' without parameters`, params.length !== 0));


      const lastParam = params[params.length - 1];
      const lastParamType = typeof lastParam;

      if (lastParamType === 'function') {
        return fn(...params);
      }

      if (true && params.length > 1 && lastParamType === 'string') {
        return fn(...params);
      }

      const value = (0, _extractValue.default)(desc);
      (true && !(typeof value === 'function') && Ember.assert(`Cannot use '${fn.name}' on field '${key}' without a callback`, typeof value === 'function'));


      return fn(...params, value);
    });
  }
});
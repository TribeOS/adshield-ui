define('@ember-decorators/utils/decorator-wrappers', ['exports', '@ember-decorators/utils/is-descriptor', '@ember-decorators/utils/normalize-descriptor'], function (exports, _isDescriptor, _normalizeDescriptor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.decorator = decorator;
  exports.decoratorWithParams = decoratorWithParams;


  function handleDescriptor(target, key, desc, fn, params = []) {
    (0, _normalizeDescriptor.default)(desc);

    return {
      enumerable: desc.enumerable,
      configurable: desc.configurable,
      writable: desc.writable,
      value: fn(target, key, desc, params)
    };
  }

  function decorator(fn) {
    return function (...params) {
      return handleDescriptor(...arguments, fn, params);
    };
  }

  function decoratorWithParams(fn) {
    return function (...params) {
      // determine if user called as @computed('blah', 'blah') or @computed
      if ((0, _isDescriptor.default)(params[params.length - 1])) {
        return handleDescriptor(...arguments, fn);
      } else {
        return function () /* target, key, desc */{
          return handleDescriptor(...arguments, fn, params);
        };
      }
    };
  }
});
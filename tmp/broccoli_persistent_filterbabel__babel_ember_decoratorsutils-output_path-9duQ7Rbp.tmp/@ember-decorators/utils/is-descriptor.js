define('@ember-decorators/utils/is-descriptor', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isDescriptor;
  function isDescriptor(item) {
    return item && typeof item === 'object' && 'enumerable' in item && 'configurable' in item;
  }
});
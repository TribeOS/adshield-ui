define('ember-macro-helpers/is-computed', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (key) {
    return key instanceof ComputedProperty;
  };

  const { ComputedProperty } = Ember;
});
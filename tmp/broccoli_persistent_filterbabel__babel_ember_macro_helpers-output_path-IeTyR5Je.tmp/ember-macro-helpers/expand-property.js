define('ember-macro-helpers/expand-property', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (property) {
    let newPropertyList = [];
    expandProperties(property, expandedProperties => {
      newPropertyList = newPropertyList.concat(expandedProperties);
    });
    return newPropertyList;
  };

  const { expandProperties } = Ember;
});
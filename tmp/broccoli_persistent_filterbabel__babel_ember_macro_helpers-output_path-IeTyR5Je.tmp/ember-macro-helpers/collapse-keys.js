define('ember-macro-helpers/collapse-keys', ['exports', 'ember-macro-helpers/collapse-key'], function (exports, _collapseKey) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.collapseKeysWithMap = collapseKeysWithMap;

  exports.default = function (keys) {
    return collapseKeysWithMap(keys).collapsedKeys;
  };

  function collapseKeysWithMap(keys) {
    let collapsedKeys = [];
    let keyMap = [];

    keys.forEach(key => {
      let array = (0, _collapseKey.default)(key);

      collapsedKeys = collapsedKeys.concat(array);

      let i;
      if (keyMap.length) {
        i = keyMap[keyMap.length - 1] + 1;
      } else {
        i = 0;
      }
      keyMap = keyMap.concat(array.map(() => i));
    });

    return {
      collapsedKeys,
      keyMap
    };
  }
});
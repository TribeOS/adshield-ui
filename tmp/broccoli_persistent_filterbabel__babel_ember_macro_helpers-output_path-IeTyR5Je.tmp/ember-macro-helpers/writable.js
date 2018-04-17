define('ember-macro-helpers/writable', ['exports', 'ember-macro-helpers/computed'], function (exports, _computed) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (getter, setterCallback) {
    let newCallback = {
      get(val) {
        return val;
      }
    };

    if (setterCallback) {
      if (typeof setterCallback === 'object' && setterCallback.set) {
        newCallback.set = setterCallback.set;
      } else {
        newCallback.set = function () {
          return setterCallback.apply(this, arguments);
        };
      }
    }

    return (0, _computed.default)(getter, newCallback);
  };
});
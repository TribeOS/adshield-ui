define('ember-macro-helpers/get-value', ['exports', 'ember-macro-helpers/is-computed'], function (exports, _isComputed) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function ({ context, macro, key } = {}) {
    if ((0, _isComputed.default)(macro)) {
      return macro._getter.call(context, key);
    }

    if (typeof macro !== 'string') {
      return macro;
    }

    if (Ember.isBlank(macro)) {
      // the macro was `[]' or `@each.key', which has been trimmed, leaving a
      // blank string, so return the context (which is likely an ArrayProxy)
      return context;
    }

    return Ember.get(context, macro);
  };
});
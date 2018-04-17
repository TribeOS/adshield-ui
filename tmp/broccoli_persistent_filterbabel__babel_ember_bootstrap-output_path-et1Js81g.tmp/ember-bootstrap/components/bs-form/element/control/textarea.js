define('ember-bootstrap/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/base/bs-form/element/control/textarea', 'ember-bootstrap/mixins/control-validation'], function (exports, _textarea, _controlValidation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _textarea.default.extend(_controlValidation.default);
});
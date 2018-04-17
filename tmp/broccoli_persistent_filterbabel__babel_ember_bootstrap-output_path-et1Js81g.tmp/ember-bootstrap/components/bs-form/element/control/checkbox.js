define('ember-bootstrap/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/base/bs-form/element/control/checkbox', 'ember-bootstrap/mixins/control-validation'], function (exports, _checkbox, _controlValidation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _checkbox.default.extend(_controlValidation.default, {
    classNames: ['form-check-input']
  });
});
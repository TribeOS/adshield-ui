define('ember-bootstrap/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/base/bs-form/element/control/input', 'ember-bootstrap/mixins/control-validation', 'ember-bootstrap/mixins/size-class'], function (exports, _input, _controlValidation, _sizeClass) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _input.default.extend(_controlValidation.default, _sizeClass.default, {
    classTypePrefix: 'form-control'
  });
});
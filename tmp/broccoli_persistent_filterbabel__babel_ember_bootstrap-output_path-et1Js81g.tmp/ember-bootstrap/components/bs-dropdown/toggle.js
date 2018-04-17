define('ember-bootstrap/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/base/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _toggle.default.extend({
    classNameBindings: ['inNav:nav-link']
  });
});
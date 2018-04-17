define('ember-bootstrap/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/base/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _title.default.extend({
    tagName: 'h5'
  });
});
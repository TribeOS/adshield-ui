define('ember-bootstrap/components/bs-form', ['exports', 'ember-bootstrap/components/base/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsForm.default.extend({
    layoutClass: Ember.computed('formLayout', function () {
      let layout = this.get('formLayout');
      return layout === 'inline' ? 'form-inline' : null;
    }).readOnly()
  });
});
define('ember-bootstrap/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/base/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _element.default.extend({
    popperClassNames: Ember.computed('fade', 'actualPlacement', 'showHelp', function () {
      let classes = ['tooltip', `bs-tooltip-${this.get('actualPlacement')}`];
      if (this.get('fade')) {
        classes.push('fade');
      }
      if (this.get('showHelp')) {
        classes.push('show');
      }
      return classes;
    })
  });
});
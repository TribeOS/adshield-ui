define('ember-bootstrap/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/base/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _label.default.extend({
    tagName: 'label',

    classNames: [],
    classNameBindings: ['invisibleLabel:sr-only', 'isHorizontal:col-form-label', 'isCheckbox:form-check-label', 'labelClass', 'sizeClass'],
    attributeBindings: ['formElementId:for'],

    sizeClass: Ember.computed('size', 'isHorizontal', function () {
      if (!this.get('isHorizontal')) {
        return;
      }
      let size = this.get('size');
      return Ember.isBlank(size) ? null : `col-form-label-${size}`;
    }),

    /**
     * Property for size styling, set to 'lg', 'sm'
     *
     * @property size
     * @type String
     * @public
     */
    size: null
  });
});
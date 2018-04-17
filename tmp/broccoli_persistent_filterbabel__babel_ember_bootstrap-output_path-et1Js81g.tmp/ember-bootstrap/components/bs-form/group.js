define('ember-bootstrap/components/bs-form/group', ['exports', 'ember-bootstrap/components/base/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _group.default.extend({
    classNameBindings: ['isHorizontal:row', 'isCheckbox:form-check:form-group', 'isInlineCheckbox:form-check-inline'],

    /**
     * Indicates whether the type of the control widget equals `checkbox`
     *
     * @property isCheckbox
     * @type boolean
     * @private
     */
    isCheckbox: Ember.computed.equal('controlType', 'checkbox').readOnly(),

    /**
     * Indicates whether the form type equals `horizontal`
     *
     * @property isHorizontal
     * @type boolean
     * @private
     */
    isHorizontal: Ember.computed.equal('formLayout', 'horizontal').readOnly(),

    isInline: Ember.computed.equal('formLayout', 'inline').readOnly(),

    isInlineCheckbox: Ember.computed.and('isCheckbox', 'isInline').readOnly()
  });
});
define('ember-bootstrap/components/base/bs-dropdown/menu', ['exports', 'ember-bootstrap/templates/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _menu.default,

    /**
     * Defaults to a `<ul>` tag in BS3 and a '<div>' tag in BS4. Change for other types of dropdown menus.
     *
     * @property tagName
     * @type string
     * @default ul
     * @public
     */

    /**
     * @property ariaRole
     * @default menu
     * @type string
     * @protected
     */
    ariaRole: 'menu',

    /**
     * Alignment of the menu, either "left" or "right"
     *
     * @property align
     * @type string
     * @default left
     * @public
     */
    align: 'left',

    /**
     * @property direction
     * @default 'down'
     * @type string
     * @private
     */
    direction: 'down',

    /**
     * @property inNav
     * @type {boolean}
     * @private
     */
    inNav: false,

    alignClass: Ember.computed('align', function () {
      if (this.get('align') !== 'left') {
        return `dropdown-menu-${this.get('align')}`;
      }
    })
  });
});
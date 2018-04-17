define('ember-bootstrap/components/bs-navbar', ['exports', 'ember-bootstrap/components/base/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsNavbar.default.extend({
    classNameBindings: ['breakpointClass', 'backgroundClass'],

    type: Ember.computed('appliedType', {
      get() {
        return this.get('appliedType');
      },

      set(key, value) {
        let newValue = !value || value === 'default' ? 'light' : value;
        this.set('appliedType', newValue);
        return newValue;
      }
    }),

    appliedType: 'light',

    /**
     * Defines the responsive toggle breakpoint size. Options are the standard
     * two character Bootstrap size abbreviations. Used to set the `navbar-expand[-*]`
     * class. Set to `null` to disable collapsing.
     *
     * @property toggleBreakpoint
     * @type String
     * @default 'lg'
     * @public
     */
    toggleBreakpoint: 'lg',

    /**
     * Sets the background color for the navbar. Can be any color
     * in the set that composes the `bg-*` classes.
     *
     * @property backgroundColor
     * @type String
     * @default 'light'
     * @public
     */
    backgroundColor: 'light',

    breakpointClass: Ember.computed('toggleBreakpoint', function () {
      let toggleBreakpoint = this.get('toggleBreakpoint');

      if (Ember.isBlank(toggleBreakpoint)) {
        return 'navbar-expand';
      } else {
        return `navbar-expand-${toggleBreakpoint}`;
      }
    }),

    backgroundClass: Ember.computed('backgroundColor', function () {
      let backgroundColor = this.get('backgroundColor');

      return `bg-${backgroundColor}`;
    }),

    _validPositions: null,

    _positionPrefix: '',

    init() {
      this._super(...arguments);
      this.set('_validPositions', ['fixed-top', 'fixed-bottom', 'sticky-top']);
    }
  });
});
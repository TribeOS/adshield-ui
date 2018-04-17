define('ember-popper/components/ember-popper', ['exports', 'ember-popper/components/ember-popper-base'], function (exports, _emberPopperBase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  let EmberPopper = class EmberPopper extends _emberPopperBase.default {

    // ================== LIFECYCLE HOOKS ==================

    init() {
      this.id = this.id || `${Ember.guidFor(this)}-popper`;
      this._parentFinder = self.document ? self.document.createTextNode('') : '';

      super.init(...arguments);
    }

    didInsertElement() {
      this._initialParentNode = this._parentFinder.parentNode;

      super.didInsertElement(...arguments);
    }
  };
  exports.default = EmberPopper;
});
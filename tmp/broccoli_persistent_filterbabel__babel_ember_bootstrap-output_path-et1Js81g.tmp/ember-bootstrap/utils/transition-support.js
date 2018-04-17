define('ember-bootstrap/utils/transition-support', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function transitionSupport() {
    let el = document.createElement('bootstrap');

    let transEndEventNames = {
      transition: 'transitionend',
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend'
    };

    for (let name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return transEndEventNames[name];
      }
    }

    return false;
  }

  exports.default = typeof document !== 'undefined' && transitionSupport();
});
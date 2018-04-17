define('ember-bootstrap/utils/transition-end', ['exports', 'ember-bootstrap/utils/transition-support'], function (exports, _transitionSupport) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = onTransitionEnd;
  function onTransitionEnd(node, handler, context, duration = 0) {
    if (!node) {
      return;
    }
    let fakeEvent = {
      target: node,
      currentTarget: node
    };
    let backup;

    if (_transitionSupport.default) {
      node.addEventListener(_transitionSupport.default, done, false);

      backup = Ember.run.later(this, done, fakeEvent, duration);
    } else {
      Ember.run.later(this, done, fakeEvent, 0);
    }

    function done(event) {
      if (backup) {
        Ember.run.cancel(backup);
      }
      node.removeEventListener(_transitionSupport.default, done);
      Ember.run.join(context, handler, event);
    }
  }
});
define('ember-bootstrap/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/base/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _item.default.extend({
    classNames: ['card'],

    /**
     * @property classTypePrefix
     * @type String
     * @default 'bg'
     * @protected
     */
    classTypePrefix: 'bg'
  });
});
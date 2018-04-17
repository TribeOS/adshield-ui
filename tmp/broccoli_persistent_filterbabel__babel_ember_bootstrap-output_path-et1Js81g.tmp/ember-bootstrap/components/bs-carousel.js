define('ember-bootstrap/components/bs-carousel', ['exports', 'ember-bootstrap/components/base/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsCarousel.default.extend({
    nextControlClassName: 'carousel-control-next',
    nextControlIcon: 'carousel-control-next-icon',
    prevControlClassName: 'carousel-control-prev',
    prevControlIcon: 'carousel-control-prev-icon'
  });
});
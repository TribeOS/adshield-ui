"use strict";



define("adshield-front/adapters/adshieldstat", ["exports", "adshield-front/adapters/application"], function (exports, _application) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _application.default.extend({
		pathForType() {
			return "adshieldstats";
		}
	});
});
define("adshield-front/adapters/application", ["exports", "ember-data"], function (exports, _emberData) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.RESTAdapter.extend({
		host: "https://api.adshield.tribeos.io/abcdefg"
		// host : "http://localhost:91/abcdefg"
	});
});
define("adshield-front/adapters/ipaccesslist", ["exports", "adshield-front/adapters/application"], function (exports, _application) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _application.default.extend({
		pathForType() {
			return "ipaccesslist";
		}
	});
});
define('adshield-front/app', ['exports', 'adshield-front/resolver', 'ember-load-initializers', 'adshield-front/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('adshield-front/components/array-path-layer', ['exports', 'ember-leaflet/components/array-path-layer'], function (exports, _arrayPathLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _arrayPathLayer.default;
    }
  });
});
define('adshield-front/components/base-layer', ['exports', 'ember-leaflet/components/base-layer'], function (exports, _baseLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _baseLayer.default;
    }
  });
});
define('adshield-front/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('adshield-front/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('adshield-front/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('adshield-front/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('adshield-front/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('adshield-front/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('adshield-front/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('adshield-front/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('adshield-front/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
define('adshield-front/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
define('adshield-front/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('adshield-front/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('adshield-front/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('adshield-front/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('adshield-front/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('adshield-front/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('adshield-front/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('adshield-front/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('adshield-front/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('adshield-front/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('adshield-front/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('adshield-front/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('adshield-front/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('adshield-front/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('adshield-front/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('adshield-front/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('adshield-front/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('adshield-front/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('adshield-front/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('adshield-front/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('adshield-front/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('adshield-front/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('adshield-front/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('adshield-front/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('adshield-front/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('adshield-front/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('adshield-front/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('adshield-front/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('adshield-front/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('adshield-front/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('adshield-front/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('adshield-front/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('adshield-front/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('adshield-front/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('adshield-front/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('adshield-front/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('adshield-front/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('adshield-front/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('adshield-front/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('adshield-front/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('adshield-front/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('adshield-front/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('adshield-front/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('adshield-front/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('adshield-front/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('adshield-front/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('adshield-front/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('adshield-front/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('adshield-front/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('adshield-front/components/circle-layer', ['exports', 'ember-leaflet/components/circle-layer'], function (exports, _circleLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _circleLayer.default;
    }
  });
});
define('adshield-front/components/circle-marker-layer', ['exports', 'ember-leaflet/components/circle-marker-layer'], function (exports, _circleMarkerLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _circleMarkerLayer.default;
    }
  });
});
define('adshield-front/components/container-layer', ['exports', 'ember-leaflet/components/container-layer'], function (exports, _containerLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _containerLayer.default;
    }
  });
});
define('adshield-front/components/data-graph', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define("adshield-front/components/data-table", ["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Component.extend({

		// pageCount : computed(function() {
		// 	const total = this.get('source.last_page') || this.get('source.current_page');
		// 	if (!total) return [];
		// 	return new Array(total+1).join('x').split('').map((e,i) => i+1);
		// }),	


		actions: {
			firstPage() {
				this.sendAction("firstPage");
			},
			previousPage() {
				this.sendAction("previousPage");
			},
			nextPage() {
				this.sendAction("nextPage");
			},
			lastPage() {
				this.sendAction("lastPage");
			}
		}

	});
});
define('adshield-front/components/div-overlay-layer', ['exports', 'ember-leaflet/components/div-overlay-layer'], function (exports, _divOverlayLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divOverlayLayer.default;
    }
  });
});
define('adshield-front/components/ember-chart', ['exports', 'ember-cli-chart/components/ember-chart'], function (exports, _emberChart) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberChart.default;
});
define('adshield-front/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define('adshield-front/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('adshield-front/components/geojson-layer', ['exports', 'ember-leaflet/components/geojson-layer'], function (exports, _geojsonLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _geojsonLayer.default;
    }
  });
});
define('adshield-front/components/image-layer', ['exports', 'ember-leaflet/components/image-layer'], function (exports, _imageLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _imageLayer.default;
    }
  });
});
define('adshield-front/components/leaflet-map', ['exports', 'ember-leaflet/components/leaflet-map'], function (exports, _leafletMap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _leafletMap.default;
    }
  });
});
define('adshield-front/components/marker-layer', ['exports', 'ember-leaflet/components/marker-layer'], function (exports, _markerLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _markerLayer.default;
    }
  });
});
define('adshield-front/components/path-layer', ['exports', 'ember-leaflet/components/path-layer'], function (exports, _pathLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pathLayer.default;
    }
  });
});
define('adshield-front/components/point-path-layer', ['exports', 'ember-leaflet/components/point-path-layer'], function (exports, _pointPathLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pointPathLayer.default;
    }
  });
});
define('adshield-front/components/polygon-layer', ['exports', 'ember-leaflet/components/polygon-layer'], function (exports, _polygonLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _polygonLayer.default;
    }
  });
});
define('adshield-front/components/polyline-layer', ['exports', 'ember-leaflet/components/polyline-layer'], function (exports, _polylineLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _polylineLayer.default;
    }
  });
});
define('adshield-front/components/popup-layer', ['exports', 'ember-leaflet/components/popup-layer'], function (exports, _popupLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _popupLayer.default;
    }
  });
});
define('adshield-front/components/tile-layer', ['exports', 'ember-leaflet/components/tile-layer'], function (exports, _tileLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tileLayer.default;
    }
  });
});
define('adshield-front/components/tooltip-layer', ['exports', 'ember-leaflet/components/tooltip-layer'], function (exports, _tooltipLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tooltipLayer.default;
    }
  });
});
define('adshield-front/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('adshield-front/components/wms-tile-layer', ['exports', 'ember-leaflet/components/wms-tile-layer'], function (exports, _wmsTileLayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _wmsTileLayer.default;
    }
  });
});
define("adshield-front/controllers/ipaccesslist", ["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Controller.extend({

		page: 0,
		limit: 10,
		filter: { dateFrom: "", dateTo: "", userKey: "" },

		listData: Ember.computed(function () {}),

		init: function () {
			this._super();
			this.refreshList(this.page, this.limit, this.filter);
		},

		refreshList: function (page, limit, filter) {
			var self = this;
			self.get('store').queryRecord("ipaccesslist", { page: page, limit: limit, filter: filter }).then(function (data) {
				self.set("model", data);
				self.set("listData", self.get("model").get("listData"));
				var listData = self.get("listData");
				listData.headers = ['IP', 'Recorded on', 'Visited Url'];
			});
		},

		actions: {
			firstPage() {
				this.set("page", 1);
				this.refreshList(this.page, this.limit, this.filter);
			},
			nextPage() {
				var listData = this.get("listData");
				if (listData.current_page == listData.last_page) return;
				this.set("page", parseInt(this.page) + 1);
				this.refreshList(this.page, this.limit, this.filter);
			},
			previousPage() {
				var listData = this.get("listData");
				if (listData.current_page == 1) return;
				this.set("page", parseInt(this.page) - 1);
				this.refreshList(this.page, this.limit, this.filter);
			},
			lastPage() {
				var listData = this.get("listData");
				this.set("page", listData.last_page);
				this.refreshList(this.page, this.limit, this.filter);
			},
			refresh() {
				this.set("page", 1);
				this.refreshList(this.page, this.limit, this.filter);
			}
		}

	});
});
define('adshield-front/controllers/stats', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Controller.extend({

		lat: 45.519743,
		lng: -122.680522,
		zoom: 1,

		init: function () {
			this._super();
			var self = this;
			self.poll = function () {
				Ember.run.later(function () {
					self.get('store').findAll('adshieldstat').then(function (data) {
						self.set("model", data);
						var stat = self.model.get('firstObject').get('stat');
						var cData = self.get("chartData");
						var maxPoint = 60;
						if (cData.labels.length < maxPoint) cData.labels.push('');
						if (cData.datasets[0].data.length == maxPoint) cData.datasets[0].data.splice(0, 1);
						cData.datasets[0].data.push(stat.transactionsInterval);
						self.set("chartData", cData);
						self.notifyPropertyChange('chartData');

						self.set("filteredStats", stat);
						self.poll();
					});
				}, 2000);
			};
			self.poll();
		},

		/**
   * parse stat JSON value so we can access from template with less issue
   * @param  {[type]} ) {		var       model [description]
   * @return {[type]}   [description]
   */
		stat: Ember.computed(function () {
			var model = this.get('model');
			return model.get('firstObject');
		}),

		/**
   * filtered stats to hide some data that aren't being used yet.
   * no point of showing it yet
   * @param  {[type]} ) {		var       model [description]
   * @return {[type]}   [description]
   */
		filteredStats: Ember.computed({
			get() {
				var model = this.get('model');
				var stats = model.get('firstObject').get('stat');
				var newstats = stats.stat.filter(function (item) {
					if (item.status == 6 || item.status == 1) return false;
					return true;
				});
				return newstats;
			},
			set(key, value) {
				var stats = value;
				var newstats = stats.stat.filter(function (item) {
					if (item.status == 6 || item.status == 1) return false;
					return true;
				});
				return newstats;
			}

		}),

		/**
   * create a ChartJS compatible data source/struct
   * @param  {[type]} ) {		var       model [description]
   * @return {[type]}   [description]
   */
		chartData: Ember.computed(function () {
			var model = this.get('model');
			var stat = model.get('firstObject').get('stat');
			var data = {};
			data.datasets = [];
			data.labels = [''];
			data.datasets.push({
				label: "Transactions",
				data: [stat.transactionsInterval],
				backgroundColor: ['rgba(109,186,252,1)', 'rgba(109,186,252,1)'],
				borderColor: ['rgba(109,186,252,1)', 'rgba(109,186,252,1)'],
				borderWidth: 2
			});
			return data;
		}),

		chartOptions: Ember.computed(function () {
			var options = {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true,
							stepSize: 1
						}
					}],
					xAxes: [{
						ticks: {
							suggestedMax: 2,
							suggestedMin: 2,
							max: 5,
							min: 0,
							stepSize: 4
						}
					}]
				},
				legend: {
					display: false
				},
				title: {
					display: true,
					text: "Transactions for the past 2 minutes"
				},
				tooltips: {
					enabled: false
				},
				elements: {
					point: {
						pointStyle: 'triangle',
						borderWidth: 1
					},
					line: {
						fill: false
					}
				}
			};
			return options;
		})

	});
});
define('adshield-front/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('adshield-front/helpers/app-version', ['exports', 'adshield-front/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;


  const {
    APP: {
      version
    }
  } = _environment.default;

  function appVersion(_, hash = {}) {
    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('adshield-front/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('adshield-front/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('adshield-front/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
  Object.defineProperty(exports, 'cancelAll', {
    enumerable: true,
    get: function () {
      return _cancelAll.cancelAll;
    }
  });
});
define('adshield-front/helpers/div-icon', ['exports', 'ember-leaflet/helpers/div-icon'], function (exports, _divIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divIcon.default;
    }
  });
  Object.defineProperty(exports, 'divIcon', {
    enumerable: true,
    get: function () {
      return _divIcon.divIcon;
    }
  });
});
define('adshield-front/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
define("adshield-front/helpers/format-number", ["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.formatNumber = formatNumber;
	function formatNumber(params /*, hash*/) {
		return params.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	exports.default = Ember.Helper.helper(formatNumber);
});
define('adshield-front/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('adshield-front/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('adshield-front/helpers/icon', ['exports', 'ember-leaflet/helpers/icon'], function (exports, _icon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _icon.default;
    }
  });
  Object.defineProperty(exports, 'icon', {
    enumerable: true,
    get: function () {
      return _icon.icon;
    }
  });
});
define('adshield-front/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define('adshield-front/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('adshield-front/helpers/lat-lng-bounds', ['exports', 'ember-leaflet/helpers/lat-lng-bounds'], function (exports, _latLngBounds) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _latLngBounds.default;
    }
  });
  Object.defineProperty(exports, 'latLngBounds', {
    enumerable: true,
    get: function () {
      return _latLngBounds.latLngBounds;
    }
  });
});
define('adshield-front/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('adshield-front/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('adshield-front/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
define('adshield-front/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('adshield-front/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('adshield-front/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
  Object.defineProperty(exports, 'perform', {
    enumerable: true,
    get: function () {
      return _perform.perform;
    }
  });
});
define('adshield-front/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('adshield-front/helpers/point', ['exports', 'ember-leaflet/helpers/point'], function (exports, _point) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _point.default;
    }
  });
  Object.defineProperty(exports, 'point', {
    enumerable: true,
    get: function () {
      return _point.point;
    }
  });
});
define('adshield-front/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('adshield-front/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
  Object.defineProperty(exports, 'task', {
    enumerable: true,
    get: function () {
      return _task.task;
    }
  });
});
define('adshield-front/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define('adshield-front/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'adshield-front/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('adshield-front/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('adshield-front/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.initialize;
    }
  });
});
define('adshield-front/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('adshield-front/initializers/export-application-global', ['exports', 'adshield-front/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('adshield-front/initializers/leaflet-assets', ['exports', 'ember-leaflet/initializers/leaflet-assets'], function (exports, _leafletAssets) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _leafletAssets.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _leafletAssets.initialize;
    }
  });
});
define('adshield-front/initializers/load-bootstrap-config', ['exports', 'adshield-front/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize
  };
});
define("adshield-front/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define("adshield-front/models/adshieldstat", ["exports", "ember-data"], function (exports, _emberData) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		stat: _emberData.default.attr(),
		meta: _emberData.default.attr("string")
	});
});
define('adshield-front/models/ipaccesslist', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		listData: _emberData.default.attr()
	});
});
define('adshield-front/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('adshield-front/router', ['exports', 'adshield-front/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('stats');
    this.route('dash');
    this.route('ipaccesslist');
  });

  exports.default = Router;
});
define('adshield-front/routes/dash', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('adshield-front/routes/ipaccesslist', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('adshield-front/routes/stats', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({

		model() {
			return this.get('store').findAll('adshieldstat');
		}

	});
});
define('adshield-front/serializers/ipaccesslist', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.RESTSerializer.extend({
		normalizeResponse(store, primaryModelClass, payload, id, requestType) {
			payload = { ipaccesslists: payload };
			return this._super(store, primaryModelClass, payload, id, requestType);
		}
	});
});
define('adshield-front/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("adshield-front/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5s+0rdgh", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "adshield-front/templates/application.hbs" } });
});
define("adshield-front/templates/components/data-graph", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PBKc4s6w", "block": "{\"symbols\":[],\"statements\":[[2,\" for graph ui \"]],\"hasEval\":false}", "meta": { "moduleName": "adshield-front/templates/components/data-graph.hbs" } });
});
define("adshield-front/templates/components/data-table", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PBwO2erk", "block": "{\"symbols\":[\"rows\",\"key\",\"value\",\"header\"],\"statements\":[[6,\"table\"],[9,\"class\",\"table table-striped\"],[9,\"width\",\"100%\"],[7],[0,\"\\n\\t\"],[6,\"thead\"],[9,\"class\",\"thead-light\"],[7],[0,\"\\n\\t\\t\"],[6,\"tr\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"source\",\"headers\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\"],[6,\"th\"],[7],[1,[19,4,[]],false],[8],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"\\t\\t\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"tbody\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"source\",\"data\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\"],[6,\"tr\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"-each-in\",[[19,1,[]]],null]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\\t\"],[6,\"td\"],[7],[1,[19,3,[]],false],[8],[0,\"\\n\"]],\"parameters\":[2,3]},null],[0,\"\\t\\t\\t\"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\t\"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" insert pagination here \"],[0,\"\\n\"],[6,\"nav\"],[9,\"aria-label\",\"Page navigation example\"],[7],[0,\"\\n\\t\"],[6,\"ul\"],[9,\"class\",\"pagination\"],[7],[0,\"\\n\\t\\t\"],[6,\"li\"],[9,\"class\",\"page-item\"],[7],[0,\"\\n\\t\\t\\t\"],[6,\"a\"],[9,\"class\",\"page-link\"],[9,\"href\",\"#\"],[9,\"aria-label\",\"First\"],[3,\"action\",[[19,0,[]],\"firstPage\"]],[7],[0,\"\\n\\t\\t\\t\\t\"],[6,\"span\"],[7],[0,\"First\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[6,\"li\"],[9,\"class\",\"page-item\"],[7],[0,\"\\n\\t\\t\\t\"],[6,\"a\"],[9,\"class\",\"page-link\"],[9,\"href\",\"#\"],[9,\"aria-label\",\"Previous\"],[3,\"action\",[[19,0,[]],\"previousPage\"]],[7],[0,\"\\n\\t\\t\\t\\t\"],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"«\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"sr-only\"],[7],[0,\"Previous\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[6,\"li\"],[9,\"class\",\"page-item\"],[7],[0,\"\\n\\t\\t\\t\"],[6,\"a\"],[9,\"class\",\"page-link\"],[9,\"href\",\"#\"],[7],[0,\"\\n\\t\\t\\t\\t\"],[6,\"span\"],[7],[1,[20,[\"source\",\"total\"]],false],[0,\" rows\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[6,\"li\"],[9,\"class\",\"page-item\"],[7],[0,\"\\n\\t\\t\\t\"],[6,\"a\"],[9,\"class\",\"page-link\"],[9,\"href\",\"#\"],[9,\"aria-label\",\"Next\"],[3,\"action\",[[19,0,[]],\"nextPage\"]],[7],[0,\"\\n\\t\\t\\t\\t\"],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"»\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"sr-only\"],[7],[0,\"Next\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[6,\"li\"],[9,\"class\",\"page-item\"],[7],[0,\"\\n\\t\\t\\t\"],[6,\"a\"],[9,\"class\",\"page-link\"],[9,\"href\",\"#\"],[9,\"aria-label\",\"Last\"],[3,\"action\",[[19,0,[]],\"lastPage\"]],[7],[0,\"\\n\\t\\t\\t\\t\"],[6,\"span\"],[7],[0,\"Last\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "adshield-front/templates/components/data-table.hbs" } });
});
define('adshield-front/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define("adshield-front/templates/dash", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "K1/B4vq5", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"dashboard\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Dashboard\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad\"],[7],[0,\"\\n        \\t\"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \\t\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-primary\"],[7],[0,\"Add Domain\"],[8],[0,\" \"],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\" \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n  \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n  \"],[6,\"option\"],[9,\"value\",\"1\"],[7],[0,\"One\"],[8],[0,\"\\n  \"],[6,\"option\"],[9,\"value\",\"2\"],[7],[0,\"Two\"],[8],[0,\"\\n  \"],[6,\"option\"],[9,\"value\",\"3\"],[7],[0,\"Three\"],[8],[0,\"\\n\"],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[6,\"table\"],[9,\"class\",\"table common\"],[7],[0,\"\\n  \"],[6,\"thead\"],[7],[0,\"\\n  \\t\"],[6,\"tr\"],[7],[0,\"\\n    \\t\"],[6,\"th\"],[9,\"colspan\",\"5\"],[7],[0,\"Domain Name\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[9,\"class\",\"t-center\"],[7],[0,\"Humans\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[9,\"class\",\"t-center\"],[7],[0,\"Whitelisted\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[9,\"class\",\"t-center\"],[7],[0,\"Good Bots\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[9,\"class\",\"t-center\"],[7],[0,\"Bad Bots\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[9,\"class\",\"t-center\"],[7],[0,\"Total\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"  \\t\\n  \\t\"],[6,\"td\"],[9,\"colspan\",\"5\"],[7],[0,\"share.cat\"],[8],[0,\"\\n    \"],[6,\"tr\"],[9,\"class\",\"t-center\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"269\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"31\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"2,330\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"2,516\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"5,146\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" Auddit Log \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"auditlog\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Complete Log\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad\"],[7],[0,\"\\n        \\t\"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \\t\"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\" \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n  \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n  \"],[6,\"option\"],[9,\"value\",\"1\"],[7],[0,\"One\"],[8],[0,\"\\n  \"],[6,\"option\"],[9,\"value\",\"2\"],[7],[0,\"Two\"],[8],[0,\"\\n  \"],[6,\"option\"],[9,\"value\",\"3\"],[7],[0,\"Three\"],[8],[0,\"\\n\"],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[6,\"table\"],[9,\"class\",\"table common\"],[7],[0,\"\\n  \"],[6,\"thead\"],[9,\"class\",\"thead-dark\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[0,\"#\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[0,\"Action\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[0,\"User\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[0,\"Date/Time\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"td\"],[9,\"colspan\",\"4\"],[7],[0,\"No Audit Log data found\"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\"],[2,\" Traffic Summary \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"trafficSummary\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Summary\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"option\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"row contentholder\"],[7],[0,\"\\n           \"],[6,\"div\"],[9,\"class\",\"col-lg-4\"],[7],[0,\"\\n           \\t\"],[6,\"div\"],[9,\"class\",\"contentbox mbottom10 tcenter\"],[7],[0,\"\\n            \"],[6,\"h4\"],[7],[0,\"Threat Response Protocols Used\"],[8],[0,\"          \\t\\n            \"],[6,\"canvas\"],[9,\"id\",\"tro-chart1\"],[7],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"contentbox tcenter\"],[7],[0,\"\\n            \"],[6,\"h4\"],[7],[0,\"Threats Averted\"],[8],[0,\"          \\t\\n            \"],[6,\"canvas\"],[9,\"id\",\"tro-chart2\"],[7],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-8\"],[7],[0,\"\\n          \"],[6,\"canvas\"],[9,\"id\",\"linechart\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[8],[0,\"                  \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" Cache Analysis \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"cacheanalysis\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Cache Analysis\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"option\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"row contentholder\"],[7],[0,\" \\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-4 text-center\"],[7],[0,\"\\n            \"],[6,\"h3\"],[7],[0,\"How effective is our caching \"],[8],[0,\"\\n            \"],[6,\"canvas\"],[9,\"id\",\"ca-chart1\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-4 text-center\"],[7],[0,\"\\n            \"],[6,\"h3\"],[7],[0,\"Where your CSS is served from\"],[8],[0,\"\\n            \"],[6,\"canvas\"],[9,\"id\",\"ca-chart2\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-4 text-center\"],[7],[0,\"\\n            \"],[6,\"h3\"],[7],[0,\"Where your JS is served from\"],[8],[0,\"          \\t\\n            \"],[6,\"canvas\"],[9,\"id\",\"ca-chart3\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" Updtream HTTP \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"upstream\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Upstream HTTP Errors\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"option\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n            \\n           \"],[6,\"div\"],[9,\"class\",\"col-lg-6 no-pad-right\"],[7],[6,\"div\"],[9,\"class\",\"contentbox\"],[7],[0,\"\\n                    \"],[6,\"table\"],[9,\"class\",\"table table-bordered marBot common\"],[7],[0,\"\\n                     \"],[6,\"thead\"],[9,\"class\",\"thead-dark\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"40%\"],[9,\"scope\",\"col\"],[7],[0,\"Time\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"26%\"],[9,\"scope\",\"col\"],[7],[0,\"4XX\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"17%\"],[9,\"scope\",\"col\"],[7],[0,\"5XX\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"17%\"],[9,\"scope\",\"col\"],[7],[0,\"Total Requests\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Today\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"142\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"6\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"148\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"July 7th, 2017\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"199\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"6\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"216\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"July 6th, 2017\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"204\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"20\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"224\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"July 5th, 2017\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"220\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"18\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"238\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"July 4th, 2017\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"189\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"17\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"203\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"July 3rd, 2017\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"190\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"19\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"209\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"July 2nd, 2017\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"266\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"26\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"292\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"July 1st, 2017\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"224\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"30\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"254\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n                \"],[8],[8],[0,\"    \\n                \"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[6,\"div\"],[9,\"class\",\"contentbox mBottom\"],[7],[0,\"\\n                        \"],[6,\"canvas\"],[9,\"id\",\"httpupstream\"],[7],[8],[0,\"\\n\\n                \"],[8],[8],[0,\"\\n                  \\n          \\n          \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\"],[2,\" Threats Summary \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"threatsSummary\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Summary\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n                \"],[6,\"option\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \\n          \"],[6,\"div\"],[9,\"class\",\"row contentholder\"],[7],[0,\" \\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-4 text-center\"],[7],[0,\"\\n            \"],[6,\"h3\"],[7],[0,\"Automated Traffic Classification\"],[8],[0,\"\\n            \"],[6,\"canvas\"],[9,\"id\",\"to-chart1\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-4 text-center\"],[7],[0,\"\\n            \"],[6,\"h3\"],[7],[0,\"Top 5 Threats by Country\"],[8],[0,\"\\n            \"],[6,\"canvas\"],[9,\"id\",\"to-chart2\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-4 text-center\"],[7],[0,\"\\n            \"],[6,\"h3\"],[7],[0,\"Threats Averted\"],[8],[0,\"          \\t\\n            \"],[6,\"canvas\"],[9,\"id\",\"to-chart3\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" Bad Bots \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"badbots\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Automated Traffic\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"option\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"row contentholder\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-8\"],[7],[0,\"\\n          \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n  \"],[6,\"thead\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[0,\"Undesired Automated Traffic Name\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[0,\"Classification\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[0,\"Page Requests\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[7],[0,\"Uncategorized Bot\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[7],[0,\"Unclassifed User Agent\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[7],[0,\"608\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"SEMRush\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Bad User Agent\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"495\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Reporting as Firefox\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Unclassified User Agent\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"495\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Reporting as Chrome\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Unclassified User Agent\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"495\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Reporting as Internet Explorer 9\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Bad User Agent\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"495\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"MJ12bot\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Known Violator User Agent\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"495\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"cURL\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Known Violator User Agent\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"495\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n          \"],[8],[0,\"\\n                    \"],[6,\"div\"],[9,\"class\",\"col-lg-4\"],[7],[0,\"\\n            \"],[6,\"h4\"],[7],[0,\"Most frequent bad bots by classification\"],[8],[0,\"          \\t\\n            \"],[6,\"canvas\"],[9,\"id\",\"bb-chart1\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n\\n\\t\\t\\t \"],[6,\"div\"],[9,\"class\",\"col-lg-4\"],[7],[0,\"\\n            \"],[6,\"h4\"],[7],[0,\"Most frequent bad bots\"],[8],[0,\"          \\t\\n            \"],[6,\"canvas\"],[9,\"id\",\"bb-chart2\"],[7],[8],[0,\"\\n          \"],[8],[0,\"          \\n            \\n          \"],[8],[0,\"          \\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n\\n\"],[2,\" Threats By Org \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"threatsbyorg\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Traffic by Organization\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"option\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \\n       \\t  \"],[6,\"div\"],[9,\"class\",\"col-lg-12\"],[7],[0,\"\\n            \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n  \\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[6,\"span\"],[9,\"class\",\"text-large\"],[7],[0,\"OVH SAS\"],[8],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Total Threats \"],[6,\"span\"],[9,\"class\",\"total\"],[7],[0,\"10,643\"],[8],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Top country by threats \"],[6,\"span\"],[9,\"class\",\"total\"],[7],[0,\"France\"],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[7],[6,\"span\"],[9,\"class\",\"text-large\"],[7],[0,\"Advanced Hosters B.V.\"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"total\"],[7],[0,\"ISP - DataWeb Global Group B.V.\"],[8],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[7],[0,\"Total Threats \"],[6,\"span\"],[9,\"class\",\"total\"],[7],[0,\"5,602\"],[8],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[7],[0,\"Top country by threats \"],[6,\"span\"],[9,\"class\",\"total\"],[7],[0,\"Netherlands\"],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[6,\"span\"],[9,\"class\",\"text-large\"],[7],[0,\"Zscaler\"],[8],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Total Threats \"],[6,\"span\"],[9,\"class\",\"total\"],[7],[0,\"3.326\"],[8],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Top country by threats \"],[6,\"span\"],[9,\"class\",\"total\"],[7],[0,\"United States\"],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[6,\"span\"],[9,\"class\",\"text-large\"],[7],[0,\"Amazon.com\"],[8],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Total Threats \"],[6,\"span\"],[9,\"class\",\"total\"],[7],[0,\"1,922\"],[8],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Top country by threats \"],[6,\"span\"],[9,\"class\",\"total\"],[7],[0,\"United States\"],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[6,\"span\"],[9,\"class\",\"text-large\"],[7],[0,\"China Telecom Guandong\"],[8],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Total Threats \"],[6,\"span\"],[9,\"class\",\"total\"],[7],[0,\"1,754\"],[8],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Top country by threats \"],[6,\"span\"],[9,\"class\",\"total\"],[7],[0,\"China\"],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \\t\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\"],[2,\" Threats By Org \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"malicious\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Suspicious Countries\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"1\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"row contentholder\"],[7],[0,\"\\n          \"],[6,\"img\"],[9,\"src\",\"img/malicious.jpg\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\"],[2,\" Trap Summary \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"trapSummary\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Overview\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"1\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"row contentholder\"],[7],[0,\"\\n          \"],[6,\"img\"],[9,\"src\",\"img/trapoverview2.jpg\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\"],[2,\" Know Violators \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"knownviolators\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Known Violators\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"1\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-6 no-pad-right\"],[7],[0,\"\\n          \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n  \"],[6,\"thead\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"80%\"],[9,\"scope\",\"col\"],[7],[0,\"IP Address (top 100)\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"colspan\",\"2\"],[9,\"scope\",\"col\"],[7],[0,\"# of Violations\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[7],[0,\"199.168.148.90\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[9,\"width\",\"30%\"],[7],[0,\"118\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"173.121.225.221\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"98\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"88.198.23.179\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"48\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"134.119.213.82\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"38\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"46.229.198.75\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"36\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n          \"],[8],[0,\"  \\n          \\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[0,\"\\n          \\t\"],[6,\"div\"],[9,\"class\",\"contentbox t-center\"],[7],[0,\"\\n            \\t\"],[6,\"h4\"],[7],[0,\"All threats from 199.168.148.90\"],[8],[0,\"\\n          \\t\\t\"],[6,\"canvas\"],[9,\"id\",\"kv-chart\"],[7],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"style\",\"padding:20px 20px 0 20px\"],[7],[0,\"\\n              \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n                \"],[6,\"thead\"],[7],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"tbody\"],[7],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[9,\"width\",\"50%\"],[7],[0,\"IP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"align\",\"left\"],[9,\"width\",\"50%\"],[7],[0,\"199.168.148.90\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"ISP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Zscaler\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"Organization\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Zscaler\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"Location\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"San Jose, United States\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n          \\t\"],[8],[0,\"  \\n          \"],[8],[0,\"\\n   \\n          \\n                    \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\"],[2,\" JavaScript Check Failed \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"javacheck\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"JavaScript Check Failed\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"1\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"            \\n          \"],[8],[0,\"\\n           \"],[6,\"div\"],[9,\"class\",\"col-lg-6 no-pad-right\"],[7],[0,\"\\n          \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n  \"],[6,\"thead\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"80%\"],[9,\"scope\",\"col\"],[7],[0,\"IP Address (top 100)\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"colspan\",\"2\"],[9,\"scope\",\"col\"],[7],[0,\"# of Violations\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[7],[0,\"212.7.217.46\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[9,\"width\",\"30%\"],[7],[0,\"115\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"173.121.225.221\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"73\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"88.198.23.179\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"51\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"134.119.213.82\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"51\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"46.229.198.75\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"50\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n        \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"134.119.213.82\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"50\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"46.229.198.75\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"49\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"158.56.200.181\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"48\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n          \"],[8],[0,\"          \\n          \\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[0,\"\\n          \\t\"],[6,\"div\"],[9,\"class\",\"contentbox t-center\"],[7],[0,\"\\n            \\t\"],[6,\"h4\"],[7],[0,\"All threats from 212.7.217.46\"],[8],[0,\"            \\n          \\t\\t\"],[6,\"canvas\"],[9,\"id\",\"jcf-chart\"],[7],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"style\",\"padding:20px 20px 0 20px\"],[7],[0,\"\\n              \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n                \"],[6,\"thead\"],[7],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"tbody\"],[7],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[9,\"width\",\"50%\"],[7],[0,\"IP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"align\",\"left\"],[9,\"width\",\"50%\"],[7],[0,\"212.7.217.46\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"ISP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Dediserv Dedicated Servers Sp.z.o.o.\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"Organization\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Dediserv Dedicated Servers Sp.z.o.o.\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                 \\n                \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n              \"],[8],[0,\"  \\n          \"],[8],[0,\"\\n                    \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\"],[2,\" JavaScript Not Loaded \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"javanot\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"JavaScript Not Loaded\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"1\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-6 no-pad-right\"],[7],[0,\"\\n          \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n  \"],[6,\"thead\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"80%\"],[9,\"scope\",\"col\"],[7],[0,\"IP Address (top 100)\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"colspan\",\"2\"],[9,\"scope\",\"col\"],[7],[0,\"# of Violations\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[7],[0,\"212.7.217.46\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[9,\"width\",\"30%\"],[7],[0,\"115\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"173.121.225.221\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"73\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"88.198.23.179\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"51\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"134.119.213.82\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"51\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"46.229.198.75\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"50\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"134.119.213.82\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"50\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"46.229.198.75\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"49\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"158.56.200.181\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"48\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n          \"],[8],[0,\"    \\n           \"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[0,\"\\n          \\t\"],[6,\"div\"],[9,\"class\",\"contentbox t-center\"],[7],[0,\"\\n            \\t\"],[6,\"h4\"],[7],[0,\"All threats from 212.7.217.46\"],[8],[0,\"                        \\n          \\t\\t\"],[6,\"canvas\"],[9,\"id\",\"jnl-chart\"],[7],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"style\",\"padding:20px 20px 0 20px\"],[7],[0,\"\\n              \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n                \"],[6,\"thead\"],[7],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"tbody\"],[7],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[9,\"width\",\"50%\"],[7],[0,\"IP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"align\",\"left\"],[9,\"width\",\"50%\"],[7],[0,\"212.7.217.46\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"ISP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Dediserv Dedicated Servers Sp.z.o.o.\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"Organization\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Dediserv Dedicated Servers Sp.z.o.o.\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                 \\n                \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n              \"],[8],[0,\"  \\n          \"],[8],[0,\"      \\n                    \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\"],[2,\" Known Violator User Agent \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"knownviolatorsagent\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Known Violator User Agent\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"1\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-6 no-pad-right\"],[7],[0,\"\\n          \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n  \"],[6,\"thead\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"80%\"],[9,\"scope\",\"col\"],[7],[0,\"IP Address (top 100)\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"colspan\",\"2\"],[9,\"scope\",\"col\"],[7],[0,\"# of Violations\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[7],[0,\"199.168.148.90\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[9,\"width\",\"30%\"],[7],[0,\"118\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"173.121.225.221\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"68\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"88.198.23.179\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"68\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"134.119.213.82\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"6\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"46.229.198.75\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"6\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"134.119.213.82\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"5\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"46.229.198.75\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"5\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"158.56.200.181\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"5\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n          \"],[8],[0,\" \\n           \"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[0,\"\\n          \\t\"],[6,\"div\"],[9,\"class\",\"contentbox t-center\"],[7],[0,\"\\n            \\t\"],[6,\"h4\"],[7],[0,\"All threats from 199.168.148.90\"],[8],[0,\"                        \\n          \\t\\t\"],[6,\"canvas\"],[9,\"id\",\"kvua-chart\"],[7],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"style\",\"padding:20px 20px 0 20px\"],[7],[0,\"\\n              \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n                \"],[6,\"thead\"],[7],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"tbody\"],[7],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[9,\"width\",\"50%\"],[7],[0,\"IP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"align\",\"left\"],[9,\"width\",\"50%\"],[7],[0,\"199.168.148.90\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"ISP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Zscaler\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"Organization\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Zscaler\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"Location\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"San Jose, United States\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                 \\n                \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n              \"],[8],[0,\"  \\n          \"],[8],[0,\"         \\n                    \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" Bad User Agents \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"baduser\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Suspicious User Agents\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"1\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-6 no-pad-right\"],[7],[0,\"\\n          \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n  \"],[6,\"thead\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"80%\"],[9,\"scope\",\"col\"],[7],[0,\"IP Address (top 100)\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"colspan\",\"2\"],[9,\"scope\",\"col\"],[7],[0,\"# of Violations\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[7],[0,\"46.229.168.75\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[9,\"width\",\"30%\"],[7],[0,\"38\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"173.121.225.221\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"36\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"88.198.23.179\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"35\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"134.119.213.82\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"34\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"46.229.198.75\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"33\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"134.119.213.82\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"33\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"46.229.198.75\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"32\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"158.56.200.181\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"32\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n          \"],[8],[0,\"    \\n           \"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[0,\"\\n          \\t\"],[6,\"div\"],[9,\"class\",\"contentbox t-center\"],[7],[0,\"\\n          \\t\\t\"],[6,\"canvas\"],[9,\"id\",\"bua-chart\"],[7],[8],[0,\"\\n            \\t\"],[6,\"h4\"],[7],[0,\"All threats from 46.229.168.75\"],[8],[0,\"                                        \\n                \"],[6,\"div\"],[9,\"style\",\"padding:20px 20px 0 20px\"],[7],[0,\"\\n              \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n                \"],[6,\"thead\"],[7],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"tbody\"],[7],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[9,\"width\",\"50%\"],[7],[0,\"IP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"align\",\"left\"],[9,\"width\",\"50%\"],[7],[0,\"46.229.168.75\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"ISP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"DataWeb Global Group B.V.\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"Organization\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Advance Hosters B.V.\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"Location\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Ashburn, United States\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                 \\n                \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n                \\n              \"],[8],[0,\"  \\n          \"],[8],[0,\"      \\n                    \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" Browser Integrity Check \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"browserinteg\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Browser Integrity Check\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"1\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-6 no-pad-right\"],[7],[0,\"\\n           \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n  \"],[6,\"thead\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"80%\"],[9,\"scope\",\"col\"],[7],[0,\"IP Address (top 100)\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"colspan\",\"2\"],[9,\"scope\",\"col\"],[7],[0,\"# of Violations\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[7],[0,\"46.229.168.75\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[9,\"width\",\"30%\"],[7],[0,\"38\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"173.121.225.221\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"36\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"88.198.23.179\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"35\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"134.119.213.82\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"34\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"46.229.198.75\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"33\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"158.56.200.181\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"33\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"24.98.137.54\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"33\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n          \"],[8],[0,\"   \\n           \"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[0,\"\\n          \\t\"],[6,\"div\"],[9,\"class\",\"contentbox t-center\"],[7],[0,\"\\n            \\t\"],[6,\"h4\"],[7],[0,\"All threats from 46.229.168.75\"],[8],[0,\"                                                    \\n          \\t\\t\"],[6,\"canvas\"],[9,\"id\",\"bic-chart\"],[7],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"style\",\"padding:20px 20px 0 20px\"],[7],[0,\"\\n              \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n                \"],[6,\"thead\"],[7],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"tbody\"],[7],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[9,\"width\",\"50%\"],[7],[0,\"IP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"align\",\"left\"],[9,\"width\",\"50%\"],[7],[0,\"46.229.168.75\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"ISP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"DataWeb Global Group B.V.\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"Organization\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Advance Hosters B.V.\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"Location\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Ashburn, United States\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                 \\n                \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n              \"],[8],[0,\"  \\n          \"],[8],[0,\"       \\n                   \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" Known Violator Data Center \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"knownviolatorscenter\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Known Violator Data Center\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"1\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-6 no-pad-right\"],[7],[0,\"\\n           \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n  \"],[6,\"thead\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"80%\"],[9,\"scope\",\"col\"],[7],[0,\"IP Address (top 100)\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"colspan\",\"2\"],[9,\"scope\",\"col\"],[7],[0,\"# of Violations\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[7],[0,\"88.198.23.179\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[9,\"width\",\"30%\"],[7],[0,\"68\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"173.121.225.221\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"8\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"56.198.23.48\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"8\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"134.119.213.82\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"6\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"46.229.198.75\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"5\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"158.56.200.181\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"5\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"24.98.137.54\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"5\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n          \"],[8],[0,\"     \\n           \"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[0,\"\\n          \\t\"],[6,\"div\"],[9,\"class\",\"contentbox t-center\"],[7],[0,\"\\n            \\t\"],[6,\"h4\"],[7],[0,\"All threats from 88.198.23.179\"],[8],[0,\"                                                    \\n          \\t\\t\"],[6,\"canvas\"],[9,\"id\",\"kvdc-chart\"],[7],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"style\",\"padding:20px 20px 0 20px\"],[7],[0,\"\\n              \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n                \"],[6,\"thead\"],[7],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"tbody\"],[7],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[9,\"width\",\"50%\"],[7],[0,\"IP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"align\",\"left\"],[9,\"width\",\"50%\"],[7],[0,\"88.198.23.179\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"ISP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Hetzner Online GmbH\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"Organization\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Hetzner Online AG\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"Location\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Nurnberg, Germany\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                 \\n                \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n              \"],[8],[0,\"  \\n          \"],[8],[0,\"     \\n                    \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" Pages Per Minute Exceeded \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"pagespermin\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Pages Per Minute Exceeded\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"1\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-6 no-pad-right\"],[7],[0,\"\\n          \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n  \"],[6,\"thead\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"80%\"],[9,\"scope\",\"col\"],[7],[0,\"IP Address (top 100)\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"colspan\",\"2\"],[9,\"scope\",\"col\"],[7],[0,\"# of Violations\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[7],[0,\"101.88.39.231\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[9,\"width\",\"30%\"],[7],[0,\"32\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"173.121.225.221\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"32\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"88.198.23.179\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"32\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"134.119.213.82\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"31\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"46.229.198.75\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"20\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"158.56.200.181\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"16\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"24.98.137.54\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"14\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n          \"],[8],[0,\"          \\n           \"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[0,\"\\n          \\t\"],[6,\"div\"],[9,\"class\",\"contentbox t-center\"],[7],[0,\"\\n            \\t\"],[6,\"h4\"],[7],[0,\"All threats from 101.88.39.231\"],[8],[0,\"                                                                                \\n          \\t\\t\"],[6,\"canvas\"],[9,\"id\",\"ppme-chart\"],[7],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"style\",\"padding:20px 20px 0 20px\"],[7],[0,\"\\n              \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n                \"],[6,\"thead\"],[7],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"tbody\"],[7],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[9,\"width\",\"50%\"],[7],[0,\"IP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"align\",\"left\"],[9,\"width\",\"50%\"],[7],[0,\"101.88.39.231\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"ISP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"China Telecom Shanghai\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"Organization\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"China Telecom Shanghai\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"Location\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Shanghai, China\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                 \\n                \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n              \"],[8],[0,\"  \\n          \"],[8],[0,\"\\n                    \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" Session Length Exceeded \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"sessionlength\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Session Length Exceeded\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"1\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-6 no-pad-right\"],[7],[0,\"\\n          \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n  \"],[6,\"thead\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"80%\"],[9,\"scope\",\"col\"],[7],[0,\"IP Address (top 100)\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"colspan\",\"2\"],[9,\"scope\",\"col\"],[7],[0,\"# of Violations\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[7],[0,\"46.229.168.76\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[9,\"width\",\"30%\"],[7],[0,\"7\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"173.121.225.221\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"6\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"88.198.23.179\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"6\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"134.119.213.82\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"6\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"46.229.198.75\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"6\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"158.56.200.181\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"5\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"24.98.137.54\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"5\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n          \"],[8],[0,\"          \\n           \"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[0,\"\\n          \\t\"],[6,\"div\"],[9,\"class\",\"contentbox t-center\"],[7],[0,\"\\n            \\t\"],[6,\"h4\"],[7],[0,\"All threats from 46.229.168.76\"],[8],[0,\"                                                                                \\n          \\t\\t\"],[6,\"canvas\"],[9,\"id\",\"sle-chart\"],[7],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"style\",\"padding:20px 20px 0 20px\"],[7],[0,\"\\n              \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n                \"],[6,\"thead\"],[7],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"tbody\"],[7],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[9,\"width\",\"50%\"],[7],[0,\"IP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"align\",\"left\"],[9,\"width\",\"50%\"],[7],[0,\"46.229.168.76\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"ISP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"DataWeb Global Group B.V.\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"Organization\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Advanced Hosters B.V.\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"Location\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Ashburn, United States\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                 \\n                \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n              \"],[8],[0,\"  \\n          \"],[8],[0,\"\\n          \\n          \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\"],[2,\" Pages Per Session Exceeded \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"pagesperses\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Pages Per Session Exceeded\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"1\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-6 no-pad-right\"],[7],[0,\"\\n          \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n  \"],[6,\"thead\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"80%\"],[9,\"scope\",\"col\"],[7],[0,\"IP Address (top 100)\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"colspan\",\"2\"],[9,\"scope\",\"col\"],[7],[0,\"# of Violations\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"199.168.148.90\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"18\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"173.121.225.221\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"18\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"88.198.23.179\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"11\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"134.119.213.82\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"1\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"46.229.198.75\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"1\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"158.56.200.181\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"1\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"24.98.137.54\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"1\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n          \"],[8],[0,\" \\n           \"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[0,\"\\n          \\t\"],[6,\"div\"],[9,\"class\",\"contentbox t-center\"],[7],[0,\"\\n            \\t\"],[6,\"h4\"],[7],[0,\"All threats from 173.212.225.221\"],[8],[0,\"                                                                                            \\n          \\t\\t\"],[6,\"canvas\"],[9,\"id\",\"ppse-chart\"],[7],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"style\",\"padding:20px 20px 0 20px\"],[7],[0,\"\\n              \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n                \"],[6,\"thead\"],[7],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"tbody\"],[7],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[9,\"width\",\"50%\"],[7],[0,\"IP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"align\",\"left\"],[9,\"width\",\"50%\"],[7],[0,\"173.212.225.221\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"ISP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Contabo GmbH\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"Organization\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Contabo GmbH\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                 \\n                 \\n                \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n              \"],[8],[0,\"  \\n          \"],[8],[0,\"         \\n                    \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" Blocked Country \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"blockedcountry\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Blocked Country\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"1\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-6 no-pad-right\"],[7],[0,\"\\n          \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n  \"],[6,\"thead\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"80%\"],[9,\"scope\",\"col\"],[7],[0,\"IP Address (top 100)\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"colspan\",\"2\"],[9,\"scope\",\"col\"],[7],[0,\"# of Violations\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[7],[0,\"199.87.154.255\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"class\",\"gey-bg\"],[7],[0,\"7\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[9,\"class\",\"gey-bg\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"173.121.225.221\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"2\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"88.198.23.179\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"2\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"134.119.213.82\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"1\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"46.229.198.75\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"1\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n          \"],[8],[0,\"  \\n           \"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[0,\"\\n          \\t\"],[6,\"div\"],[9,\"class\",\"contentbox t-center\"],[7],[0,\"\\n            \\t\"],[6,\"h4\"],[7],[0,\"All threats from 199.87.154.255\"],[8],[0,\"                                                                                                        \\n          \\t\\t\"],[6,\"canvas\"],[9,\"id\",\"bc-chart\"],[7],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"style\",\"padding:20px 20px 0 20px\"],[7],[0,\"\\n              \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n                \"],[6,\"thead\"],[7],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"tbody\"],[7],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[9,\"width\",\"50%\"],[7],[0,\"IP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"align\",\"left\"],[9,\"width\",\"50%\"],[7],[0,\"199.87.154.255\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"ISP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"LES.NET\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"Organization\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"TOR Exit Gateway\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                 \\n                 \\n                \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n              \"],[8],[0,\"  \\n          \"],[8],[0,\"        \\n                    \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" Aggregator User Agents \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"agguser\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Aggregator User Agents\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"1\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-6 no-pad-right\"],[7],[0,\"\\n          \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n  \"],[6,\"thead\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"80%\"],[9,\"scope\",\"col\"],[7],[0,\"IP Address (top 100)\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"colspan\",\"2\"],[9,\"scope\",\"col\"],[7],[0,\"# of Violations\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"class\",\"gey-bg\"],[7],[0,\"54.173.35.129\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"class\",\"gey-bg\"],[7],[0,\"11\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[9,\"class\",\"gey-bg\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"173.121.225.221\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"1\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"88.198.23.179\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"1\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"134.119.213.82\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"1\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"    \\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n          \"],[8],[0,\"      \\n           \"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[0,\"\\n          \\t\"],[6,\"div\"],[9,\"class\",\"contentbox t-center\"],[7],[0,\"\\n            \\t\"],[6,\"h4\"],[7],[0,\"All threats from 54.173.35.129\"],[8],[0,\"                                                                                                                    \\n          \\t\\t\"],[6,\"canvas\"],[9,\"id\",\"aua-chart\"],[7],[8],[0,\"\\n                 \"],[6,\"div\"],[9,\"style\",\"padding:20px 20px 0 20px\"],[7],[0,\"\\n              \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n                \"],[6,\"thead\"],[7],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"tbody\"],[7],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[9,\"width\",\"50%\"],[7],[0,\"IP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"align\",\"left\"],[9,\"width\",\"50%\"],[7],[0,\"54.173.35.129\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"ISP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Amazon\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"Organization\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Amazon\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"Location\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Ashburn, United States\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                 \\n                 \\n                \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n              \"],[8],[0,\"  \\n          \"],[8],[0,\"    \\n                        \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\"],[2,\" Known Violator Automation Tool \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"knownviolatorstool\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Known Violator Automation Tool\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"1\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n           \"],[6,\"div\"],[9,\"class\",\"row contentholder\"],[7],[0,\"\\n          \\t\"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"contentbox t-center\"],[7],[0,\"\\n            \\t\"],[6,\"h4\"],[7],[0,\"All threats from 54.173.35.129\"],[8],[0,\"                                                                                                                                                \\n          \\t\\t\"],[6,\"canvas\"],[9,\"id\",\"kvat-chart\"],[7],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"style\",\"padding:20px 20px 0 20px\"],[7],[0,\"\\n              \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[7],[0,\"\\n                \"],[6,\"thead\"],[7],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"tbody\"],[7],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[9,\"width\",\"50%\"],[7],[0,\"IP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"align\",\"left\"],[9,\"width\",\"50%\"],[7],[0,\"54.153.45.84\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"ISP\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Amazon\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"Organization\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"Amazon\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                  \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"td\"],[9,\"align\",\"right\"],[7],[0,\"Location\"],[8],[0,\"\\n        \"],[6,\"td\"],[9,\"width\",\"30%\"],[9,\"align\",\"left\"],[7],[0,\"San Jose, United States\"],[8],[0,\"\\n      \"],[8],[0,\"\\n                 \\n                 \\n                \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"  \\n          \"],[8],[0,\"\\n          \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" Click Fraud \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"clickfraud\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Click Fraud\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"1\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"row contentholder\"],[7],[0,\"\\n           \"],[6,\"div\"],[9,\"class\",\"col-lg-4\"],[7],[0,\"\\n           \\t\"],[6,\"div\"],[9,\"class\",\"contentbox mbottom10 tcenter\"],[7],[0,\"\\n            \"],[6,\"h4\"],[7],[0,\"Total Automated Clicks vs Ad Clicks\"],[8],[0,\"          \\t\\n            \"],[6,\"canvas\"],[9,\"id\",\"cf-chart1\"],[7],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"contentbox tcenter\"],[7],[0,\"\\n            \"],[6,\"h4\"],[7],[0,\"Top 5 Agencies by Automated Clicks\"],[8],[0,\"          \\t\\n            \"],[6,\"canvas\"],[9,\"id\",\"cf-chart2\"],[7],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-8\"],[7],[0,\"\\n          \\t        \"],[6,\"canvas\"],[9,\"id\",\"graph\"],[7],[8],[0,\"                    \\n          \"],[8],[0,\"\\n          \\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" Captcha Requests \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"captchareq\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Captcha Requests\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"1\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"row contentholder\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-4\"],[7],[0,\"\\n           \\t\"],[6,\"div\"],[9,\"class\",\"contentbox mbottom10 tcenter\"],[7],[0,\"\\n            \"],[6,\"h4\"],[7],[0,\"Total Traffic vs. CAPTCHA Served\"],[8],[0,\"          \\t\\n            \"],[6,\"canvas\"],[9,\"id\",\"cr-chart1\"],[7],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"contentbox tcenter\"],[7],[0,\"\\n            \"],[6,\"h4\"],[7],[0,\"Attempts Solved vs. Failed\"],[8],[0,\"          \\t\\n            \"],[6,\"canvas\"],[9,\"id\",\"cr-chart2\"],[7],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-8\"],[7],[0,\"\\n          \"],[6,\"canvas\"],[9,\"id\",\"linechart2\"],[7],[8],[0,\"          \\n          \"],[8],[0,\"\\n          \\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-12\"],[7],[0,\"\\n          \"],[6,\"table\"],[9,\"class\",\"table table-bordered common\"],[7],[0,\"\\n  \"],[6,\"thead\"],[9,\"class\",\"thead-dark\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[0,\"Date\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[0,\"Total Traffic\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[0,\"Total Served\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[0,\"Attempts\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[0,\"Solved\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[0,\"Failed\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[0,\"Success Rate\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"May 9th ,2017\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"953\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"177\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"0\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"0\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"0\"],[8],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"attempts\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" Good Bots \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"goodbots\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Desirable Automated Traffic\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[9,\"style\",\"margin-bottom:10px\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"vertical-align:middle\"],[7],[6,\"span\"],[9,\"style\",\"display:inline-block; padding:3px 10px 0 10px; font-size:16px\"],[7],[0,\"Show results from:\"],[8],[0,\"\\n              \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Last 60 Days\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"1\"],[7],[0,\"Last 7 Days\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-4 no-pad-right\"],[7],[0,\"\\n          \"],[6,\"table\"],[9,\"class\",\"table table-bordered common\"],[7],[0,\"\\n  \"],[6,\"thead\"],[9,\"class\",\"thead-dark\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"80%\"],[9,\"scope\",\"col\"],[7],[0,\"System Name\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"colspan\",\"2\"],[9,\"scope\",\"col\"],[7],[0,\"# of Requests\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Googlebot\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"8,566\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-stop\"],[9,\"style\",\"color:#7ebb6b\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Yandex Bot\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"5,510\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-stop\"],[9,\"style\",\"color:#76aac0\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Bingbot\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"3,911\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-stop\"],[9,\"style\",\"color:#6d91c1\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Baiduspider\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"3,491\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-stop\"],[9,\"style\",\"color:#7274c1\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Googlebot Mobile\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"2,371\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-stop\"],[9,\"style\",\"color:#cb7c77\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Twitterbot\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"265\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"Yahoo! Slurp\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"204\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[7],[0,\"MSNBot Media\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"30%\"],[7],[0,\"144\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"3%\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n          \"],[8],[0,\"          \\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-8\"],[7],[0,\"\\n          \\t\"],[6,\"div\"],[9,\"class\",\"contentbox\"],[7],[0,\"\\n                      \"],[6,\"canvas\"],[9,\"id\",\"linechartgoodbots\"],[7],[8],[0,\"          \\n              \"],[8],[0,\"  \\n          \"],[8],[0,\"                      \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" Targeted Content\"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"targetcon\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Targeted Content\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpa row\"],[7],[0,\"\\n          \\n          \"],[6,\"div\"],[9,\"class\",\"col-lg-12 mBottom\"],[7],[0,\"\\n                \"],[6,\"button\"],[9,\"class\",\"btn btn-secondary\"],[7],[0,\"Jul 2\"],[8],[0,\"\\n                \"],[6,\"button\"],[9,\"class\",\"btn btn-secondary\"],[7],[0,\"Jul 3\"],[8],[0,\"\\n                \"],[6,\"button\"],[9,\"class\",\"btn btn-secondary\"],[7],[0,\"Jul 4\"],[8],[0,\"\\n                \"],[6,\"button\"],[9,\"class\",\"btn btn-secondary\"],[7],[0,\"Jul 5\"],[8],[0,\"\\n                \"],[6,\"button\"],[9,\"class\",\"btn btn-secondary\"],[7],[0,\"Jul 6\"],[8],[0,\"\\n                \"],[6,\"button\"],[9,\"class\",\"btn btn-secondary\"],[7],[0,\"Jul 7\"],[8],[0,\"\\n                \"],[6,\"button\"],[9,\"class\",\"btn btn-success\"],[7],[0,\"Today\"],[8],[0,\"\\n                \"],[8],[0,\"\\n           \"],[6,\"div\"],[9,\"class\",\"col-lg-8 no-pad-right\"],[7],[6,\"div\"],[9,\"class\",\"contentbox\"],[7],[0,\"\\n                    \"],[6,\"table\"],[9,\"class\",\"table table-bordered marBot common\"],[7],[0,\"\\n                     \"],[6,\"thead\"],[9,\"class\",\"thead-dark\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[0,\"Path\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"colspan\",\"2\"],[9,\"scope\",\"col\"],[7],[0,\"Undesirable Automated Requests\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"60%\"],[7],[0,\"/\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"40%\"],[7],[0,\"32\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"60%\"],[9,\"class\",\"gey-bg\"],[7],[0,\"/blogs.ph\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"40%\"],[9,\"class\",\"gey-bg\"],[7],[0,\"2\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"60%\"],[7],[0,\"/the-perfect-image-to-kick-off-the-new-year\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"40%\"],[7],[0,\"1\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"60%\"],[7],[0,\"/10-olympic-sports-you-didnt-know-existed/10\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"40%\"],[7],[0,\"1\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n                \"],[8],[8],[0,\"    \\n                \"],[6,\"div\"],[9,\"class\",\"col-lg-4\"],[7],[6,\"div\"],[9,\"class\",\"contentbox mBottom\"],[7],[0,\"\\n                    \"],[6,\"p\"],[7],[0,\"View the top 100 url paths by total number of daily bad bot requests.\"],[8],[0,\"\\n                    \"],[6,\"p\"],[7],[0,\"Breakdown of threats and response codes can be viewed by selecting a path in the table.\"],[8],[0,\"\\n                \"],[8],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"col-lg-4\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"contentbox\"],[7],[0,\"\\n                    \"],[6,\"h1\"],[7],[0,\"Response Codes by Total Percentage \"],[8],[0,\"\\n                    \"],[6,\"canvas\"],[9,\"id\",\"tc-chart\"],[7],[8],[0,\"\\n                  \"],[8],[0,\"\\n          \"],[8],[0,\"\\n           \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" Content Protection\"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"contentprotect\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Content Protection\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\"    \\n        \\t\"],[6,\"div\"],[9,\"class\",\"col-lg-7 no-pad-right\"],[7],[0,\"\\n            \\t\"],[6,\"div\"],[9,\"class\",\"contentbox\"],[7],[0,\"\\n                \\t\"],[6,\"h1\"],[7],[0,\"Manage your threat responses\"],[8],[0,\"\\n                    \"],[6,\"p\"],[7],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"block\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"1\"],[7],[0,\"Captcha\"],[8],[0,\"\\n              \"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"b-bottom\"],[7],[0,\" requests from \"],[6,\"strong\"],[7],[0,\"known violators\"],[8],[8],[8],[0,\"\\n                    \"],[6,\"p\"],[9,\"style\",\"border-bottom:1px #eee solid; padding-bottom:10px\"],[7],[0,\"Known Signatures protects you from Distil's curated list of known content thieves and malicous bots. This is a global IP and bot signature ACL that is maintained based on information gathered from all of our customers.\"],[8],[0,\"\\n                    \"],[6,\"p\"],[7],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[7],[0,\"block\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Captcha\"],[8],[0,\"\\n              \"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"b-bottom\"],[7],[0,\" requests from \"],[6,\"strong\"],[7],[0,\"known violator data centers\"],[8],[8],[8],[0,\"\\n                    \"],[6,\"p\"],[9,\"style\",\"border-bottom:1px #eee solid; padding-bottom:10px\"],[7],[0,\"Known Signatures protects you from Distil's curated list of known content thieves and malicous bots. This is a global IP and bot signature ACL that is maintained based on information gathered from all of our customers.\"],[8],[0,\"\\n                \"],[8],[0,\"\\n            \"],[8],[0,\"      \\n        \\t\"],[6,\"div\"],[9,\"class\",\"col-lg-5\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"contentbox mBottom\"],[7],[0,\"\\n                \\t\"],[6,\"h1\"],[7],[0,\"Manage referrers & proxies\"],[8],[0,\"\\n                    \"],[6,\"p\"],[7],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"No\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"1\"],[7],[0,\"Yes\"],[8],[0,\"\\n              \"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"info\"],[7],[0,\" I do not want to block \"],[6,\"a\"],[9,\"href\",\"#\"],[9,\"accesskey\",\"#\"],[7],[0,\"referrers\"],[8],[8],[8],[0,\"\\n              \"],[6,\"p\"],[7],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[7],[0,\"No\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Yes\"],[8],[0,\"\\n              \"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"info\"],[7],[0,\" I want to block \"],[6,\"a\"],[9,\"href\",\"#\"],[9,\"accesskey\",\"#\"],[7],[0,\"anonymous proxies\"],[8],[8],[8],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"contentbox\"],[7],[0,\"\\n                \\t\"],[6,\"h1\"],[7],[0,\"Machine Learning Settings\"],[8],[0,\"\\n                    \"],[6,\"p\"],[7],[0,\"No data found\"],[8],[0,\"\\n              \\n                \"],[8],[0,\"\\n            \"],[8],[0,\"      \\n          \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" Custom Pages\"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"custompage\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Custom Pages\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\"    \\n        \\n        \"],[6,\"div\"],[9,\"class\",\"col-lg-12 mBottom\"],[7],[0,\"\\n            \\t\"],[6,\"div\"],[9,\"class\",\"contentbox\"],[7],[0,\"\\n                \\t\"],[6,\"h1\"],[7],[0,\"Custom CAPTCHA,block, and drop pages\"],[8],[0,\"\\n                  \"],[6,\"p\"],[7],[0,\"Distil Networks offers the ability for users to customize the block, drop and CAPTCHA pages that a visiting bot will receive when accessing their website. The pages exist on the protected website, allowing customers full controll over the pages they're serving as a response. For more information on how to configure these options, please view our support page on custom block, dron and cAPTCHA pages.\"],[8],[0,\"\\n                    \\n                  \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n                  \"],[6,\"div\"],[9,\"class\",\"col-lg-4\"],[7],[0,\"\\n                   \\t  \"],[6,\"label\"],[9,\"style\",\"display:block\"],[7],[0,\"Custom CAPTCHA page URL\"],[8],[0,\"\\n                      \"],[6,\"input\"],[9,\"style\",\"width:100%; border:#ccc solid 1px; padding:5px\"],[9,\"value\",\"/sys/captcha.html\"],[9,\"type\",\"text\"],[9,\"class\",\"mbottom10\"],[7],[8],[0,\"\\n                      \"],[6,\"input\"],[9,\"name\",\"\"],[9,\"type\",\"checkbox\"],[9,\"value\",\"\"],[7],[8],[0,\" Enabled?                  \"],[8],[0,\"\\n                  \"],[6,\"div\"],[9,\"class\",\"col-lg-4\"],[7],[0,\"\\n                    \"],[6,\"label\"],[9,\"style\",\"display:block\"],[7],[0,\"Custom block page URL\"],[8],[0,\"\\n                      \"],[6,\"input\"],[9,\"style\",\"width:100%; border:#ccc solid 1px; padding:5px\"],[9,\"value\",\"/sys/block.html\"],[9,\"type\",\"text\"],[9,\"class\",\"mbottom10\"],[7],[8],[0,\"\\n                      \"],[6,\"input\"],[9,\"name\",\"\"],[9,\"type\",\"checkbox\"],[9,\"value\",\"\"],[7],[8],[0,\" Enabled?                  \"],[8],[0,\"\\n                  \"],[6,\"div\"],[9,\"class\",\"col-lg-4\"],[7],[0,\"\\n                    \"],[6,\"label\"],[9,\"style\",\"display:block\"],[7],[0,\"Custom drop page URL\"],[8],[0,\"\\n                      \"],[6,\"input\"],[9,\"style\",\"width:100%; border:#ccc solid 1px; padding:5px\"],[9,\"value\",\"/sys/drop.html\"],[9,\"type\",\"text\"],[9,\"class\",\"mbottom10\"],[7],[8],[0,\"\\n                      \"],[6,\"input\"],[9,\"name\",\"\"],[9,\"type\",\"checkbox\"],[9,\"value\",\"\"],[7],[8],[0,\" Enabled?                  \"],[8],[0,\"\\n                  \"],[8],[0,\"\\n                  \\n            \\t\"],[8],[0,\"\\n            \"],[8],[0,\"      \\n            \"],[6,\"div\"],[9,\"class\",\"col-lg-12\"],[7],[0,\"\\n            \\t\"],[6,\"div\"],[9,\"class\",\"contentbox\"],[7],[0,\"\\n                \\t\"],[6,\"h1\"],[7],[0,\"Custom Validation and Identity Pages\"],[8],[0,\"\\n                    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n                    \"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[0,\"\\n                    \\t\"],[6,\"p\"],[7],[0,\"Shown when a POST request is received from a client that has either failed JavaScript tests or, in the case of Force Identification, is not recorded as currently having cleared JavaScript. It is basically the identity page for POST requests.\"],[8],[0,\"\\n                    \\t\"],[6,\"label\"],[9,\"style\",\"display:block\"],[7],[0,\"Custom JavaScript validation URL\"],[8],[0,\"\\n                        \"],[6,\"input\"],[9,\"style\",\"width:100%; border:#ccc solid 1px; padding:5px\"],[9,\"value\",\"/sys/js_validate.html\"],[9,\"type\",\"text\"],[9,\"class\",\"mbottom10\"],[7],[8],[0,\"\\n                        \"],[6,\"input\"],[9,\"name\",\"\"],[9,\"type\",\"checkbox\"],[9,\"value\",\"\"],[7],[8],[0,\" Enabled?\\n                    \"],[8],[0,\"\\n                    \"],[6,\"div\"],[9,\"class\",\"col-lg-6\"],[7],[0,\"\\n                    \"],[6,\"p\"],[7],[0,\"Shown when an attempt is made to verify a Distil unique identified where the identifier has not been validated. \"],[8],[0,\"\\n                    \"],[6,\"label\"],[9,\"style\",\"display:block\"],[7],[0,\"Custom unable to identify URL\"],[8],[0,\"\\n                        \"],[6,\"input\"],[9,\"style\",\"width:100%; border:#ccc solid 1px; padding:5px\"],[9,\"value\",\"/sys/unable_to_identify.html\"],[9,\"type\",\"text\"],[9,\"class\",\"mbottom10\"],[7],[8],[0,\"\\n                        \"],[6,\"input\"],[9,\"name\",\"\"],[9,\"type\",\"checkbox\"],[9,\"value\",\"\"],[7],[8],[0,\" Enabled?\\n                    \"],[8],[0,\"\\n                    \\n                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n            \"],[8],[0,\"            \\n          \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" IP Access List\"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"ipaccess\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"IP Access List\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\"  \\n        \\t\"],[6,\"div\"],[9,\"class\",\"col-lg-12\"],[7],[0,\"\\n            \"],[6,\"table\"],[9,\"class\",\"table common table-bordered\"],[7],[0,\"\\n  \"],[6,\"thead\"],[9,\"class\",\"thead-dark\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"3%\"],[9,\"scope\",\"col\"],[7],[6,\"input\"],[9,\"name\",\"\"],[9,\"type\",\"checkbox\"],[9,\"value\",\"\"],[7],[8],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"38%\"],[9,\"scope\",\"col\"],[7],[0,\"IP Address\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"20%\"],[9,\"scope\",\"col\"],[7],[0,\"Access\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"21%\"],[9,\"scope\",\"col\"],[7],[0,\"Expires\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"18%\"],[9,\"scope\",\"col\"],[7],[0,\"Notes\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n    \\t\"],[6,\"td\"],[7],[6,\"input\"],[9,\"name\",\"\"],[9,\"type\",\"checkbox\"],[9,\"value\",\"\"],[7],[8],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"198.84.189.168\"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"allow\"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"never\"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"JW-Home\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n    \\t\"],[6,\"td\"],[7],[6,\"input\"],[9,\"name\",\"\"],[9,\"type\",\"checkbox\"],[9,\"value\",\"\"],[7],[8],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"104.236.116.6 \"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"allow\"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"never\"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"icinga2\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\t\\n            \"],[8],[0,\"        \\n          \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" Country Block List\"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"countryblock\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Country Block List\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\"      \\n        \\t\"],[6,\"div\"],[9,\"class\",\"col-lg-7 no-pad-right\"],[7],[6,\"div\"],[9,\"class\",\"contentbox\"],[7],[0,\"\\n                \\t\"],[6,\"h1\"],[7],[0,\"Manage your country acccess list\"],[8],[0,\"\\n                    \"],[6,\"table\"],[9,\"class\",\"table table-bordered\"],[9,\"style\",\"margin-bottom:0\"],[7],[0,\"\\n  \"],[6,\"thead\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"width\",\"54%\"],[9,\"scope\",\"col\"],[7],[0,\"Country Code\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[0,\"Country\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"td\"],[9,\"colspan\",\"2\"],[7],[0,\"No blocked countries\"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n                \"],[8],[8],[0,\"    \\n                \"],[6,\"div\"],[9,\"class\",\"col-lg-5\"],[7],[6,\"div\"],[9,\"class\",\"contentbox\"],[7],[0,\"\\n                \\t\"],[6,\"h1\"],[7],[0,\"Add a country to the block list\"],[8],[0,\"\\n                    \"],[6,\"label\"],[9,\"style\",\"display:block\"],[7],[0,\"Country\"],[8],[0,\"\\n                        \"],[6,\"input\"],[9,\"style\",\"width:100%; border:#ccc solid 1px; padding:5px\"],[9,\"value\",\"search by name or color\"],[9,\"type\",\"text\"],[9,\"class\",\"mbottom10\"],[7],[8],[0,\"\\n                        \"],[6,\"button\"],[9,\"class\",\"btn btn-primary\"],[7],[0,\"Block Country\"],[8],[0,\"\\n                        \"],[6,\"button\"],[9,\"class\",\"btn btn-secondary\"],[7],[0,\"Cancel\"],[8],[0,\"\\n                \"],[8],[8],[0,\"  \\n          \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\"],[2,\" Content Distribution\"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"contentdis\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Content Distribution\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\"    \\n        \"],[6,\"div\"],[9,\"class\",\"col-lg-7 no-pad-right\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"contentbox\"],[7],[0,\"\\n              \"],[6,\"h1\"],[7],[0,\"Manage your cache\"],[8],[0,\"\\n              \"],[6,\"p\"],[7],[0,\"\\n                \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                  \"],[6,\"option\"],[7],[0,\"No\"],[8],[0,\"\\n                  \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Yes\"],[8],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"span\"],[9,\"class\",\"info\"],[7],[0,\" I want to enable content cache \"],[6,\"a\"],[9,\"href\",\"#\"],[7],[0,\"content cache\"],[8],[8],[8],[0,\"\\n              \"],[6,\"p\"],[7],[0,\"\\n                \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                  \"],[6,\"option\"],[7],[0,\"No\"],[8],[0,\"\\n                  \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Yes\"],[8],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"span\"],[9,\"class\",\"info\"],[7],[0,\" I want to cache URLs without extension\"],[8],[8],[0,\"\\n              \"],[6,\"p\"],[7],[0,\"\\n                \"],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                  \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"No\"],[8],[0,\"\\n                  \"],[6,\"option\"],[7],[0,\"Yes\"],[8],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"span\"],[9,\"class\",\"info\"],[7],[0,\" I do not want to enable \"],[6,\"a\"],[9,\"href\",\"#\"],[7],[0,\"mobile cache\"],[8],[8],[8],[0,\"\\n                \"],[6,\"h1\"],[7],[0,\"Cache Extensions\"],[8],[0,\"\\n                \"],[6,\"p\"],[7],[0,\"I want the following file types to be cached\"],[8],[0,\"\\n                \"],[6,\"button\"],[9,\"class\",\"btn btn-success\"],[7],[0,\"html\"],[8],[0,\"\\n                \"],[6,\"button\"],[9,\"class\",\"btn btn-secondary\"],[7],[0,\"css\"],[8],[0,\"\\n                \"],[6,\"button\"],[9,\"class\",\"btn btn-secondary\"],[7],[0,\"js\"],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"    \\n                \"],[6,\"div\"],[9,\"class\",\"col-lg-5\"],[7],[6,\"div\"],[9,\"class\",\"contentbox mBottom\"],[7],[0,\"\\n                \\t\"],[6,\"h1\"],[7],[0,\"Compression & reroute\"],[8],[0,\"\\n                    \"],[6,\"p\"],[7],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"No\"],[8],[0,\"\\n                \"],[6,\"option\"],[7],[0,\"Yes\"],[8],[0,\"\\n              \"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"info\"],[7],[0,\" I do not want to enable \"],[6,\"a\"],[9,\"href\",\"#\"],[7],[0,\"www.reroute\"],[8],[8],[8],[0,\"\\n              \"],[6,\"p\"],[7],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"No\"],[8],[0,\"\\n                \"],[6,\"option\"],[7],[0,\"Yes\"],[8],[0,\"\\n              \"],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"info\"],[7],[0,\" I do not want to enable \"],[6,\"a\"],[9,\"href\",\"#\"],[7],[0,\"bypass cookie\"],[8],[8],[8],[0,\"\\n                \"],[8],[8],[0,\"    \\n                \\n                \"],[6,\"div\"],[9,\"class\",\"col-lg-5\"],[7],[6,\"div\"],[9,\"class\",\"contentbox\"],[7],[0,\"\\n                \\t\"],[6,\"h1\"],[7],[0,\"Custom Headers\"],[8],[0,\"\\n                    \"],[6,\"p\"],[7],[0,\"By default, Distil passes the requesting client IP back to your server in the X-Forwarded-For and X-Real-IP headers. If your web server requires the requesting client IP passed as a different header (for example: X-True-Client-IP), please enter it here.\"],[8],[0,\"\\n                    \"],[6,\"label\"],[9,\"style\",\"display:block\"],[7],[0,\"Client IP Header\"],[8],[0,\"\\n                        \"],[6,\"input\"],[9,\"style\",\"width:100%; border:#ccc solid 1px; padding:5px\"],[9,\"value\",\"X-Forwarder-For\"],[9,\"type\",\"text\"],[9,\"class\",\"mbottom10\"],[7],[8],[0,\"\\n              \\n                \"],[8],[8],[0,\"    \\n          \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" Account Management \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"accountman\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Account Management\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"boxpad row\"],[7],[0,\" \\n        \"],[6,\"div\"],[9,\"class\",\"col-lg-7\"],[7],[6,\"div\"],[9,\"class\",\"contentbox\"],[7],[0,\"\\n                \\t\"],[6,\"h1\"],[7],[0,\"User Management\"],[8],[0,\"\\n                    \"],[6,\"table\"],[9,\"class\",\"table table-bordered marBot\"],[7],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"35%\"],[7],[0,\"aman@tr.be\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"40%\"],[7],[0,\"account access\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"25%\"],[9,\"align\",\"right\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"35%\"],[7],[0,\"florin@tr.be\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"40%\"],[7],[0,\"account access\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"25%\"],[9,\"align\",\"right\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"35%\"],[7],[0,\"is@tr.be\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"40%\"],[7],[0,\"account access\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"25%\"],[9,\"align\",\"right\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"35%\"],[7],[0,\"jw@tr.be\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"40%\"],[7],[0,\"account access\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"25%\"],[9,\"align\",\"right\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right\"],[7],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n                \"],[8],[8],[0,\"    \\n                \"],[6,\"div\"],[9,\"class\",\"col-lg-5\"],[7],[6,\"div\"],[9,\"class\",\"contentbox mBottom\"],[7],[0,\"\\n                    \"],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Company\"],[8],[8],[0,\"\\n                    \"],[6,\"p\"],[7],[0,\"Tr.be\"],[8],[0,\"\\n                    \"],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Address\"],[8],[8],[0,\"\\n                    \"],[6,\"p\"],[7],[0,\"0\"],[8],[0,\"\\n                    \"],[6,\"button\"],[9,\"class\",\"btn btn-secondary\"],[7],[0,\"Edit\"],[8],[0,\"\\n                \"],[8],[8],[0,\"    \\n                \"],[6,\"div\"],[9,\"class\",\"col-lg-5\"],[7],[6,\"div\"],[9,\"class\",\"contentbox mBottom\"],[7],[0,\"\\n                \\t\"],[6,\"h1\"],[7],[0,\"Email Notifications\"],[8],[0,\"\\n                    \"],[6,\"p\"],[7],[0,\"Add emails where you would like to receive various email notifications from Distil Networks\"],[8],[0,\"\\n                    \"],[6,\"table\"],[9,\"class\",\"table table-bordered marBot\"],[7],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"35%\"],[9,\"valign\",\"middle\"],[7],[0,\"is@tr.be\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"40%\"],[9,\"valign\",\"middle\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-ok\"],[7],[8],[0,\" All\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"25%\"],[9,\"align\",\"center\"],[7],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default\"],[7],[0,\"-\"],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"35%\"],[9,\"valign\",\"middle\"],[7],[0,\"jw@tr.be\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"40%\"],[9,\"valign\",\"middle\"],[7],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-ok\"],[7],[8],[0,\" All\"],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"25%\"],[9,\"align\",\"center\"],[7],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default\"],[7],[0,\"-\"],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"35%\"],[9,\"valign\",\"middle\"],[7],[6,\"input\"],[9,\"style\",\"width:100%; border:#ccc solid 1px; padding:5px\"],[9,\"value\",\"Email Address\"],[9,\"type\",\"text\"],[7],[8],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"40%\"],[9,\"valign\",\"middle\"],[7],[6,\"select\"],[9,\"class\",\"custom-select\"],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"selected\",\"\"],[7],[0,\"Select\"],[8],[0,\"\\n                \"],[6,\"option\"],[7],[0,\"Yes\"],[8],[0,\"\\n              \"],[8],[8],[0,\"\\n      \"],[6,\"td\"],[9,\"width\",\"25%\"],[9,\"align\",\"center\"],[7],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default\"],[7],[0,\"+\"],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n                    \\n                \"],[8],[8],[0,\"    \\n                \"],[6,\"div\"],[9,\"class\",\"col-lg-5\"],[9,\"style\",\"float:right\"],[7],[6,\"div\"],[9,\"class\",\"contentbox mBottom\"],[7],[0,\"\\n                    \"],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Password Protection Settings\"],[8],[8],[0,\"\\n                    \"],[6,\"button\"],[9,\"class\",\"btn btn-secondary\"],[7],[0,\"Configure Settings\"],[8],[0,\"\\n                \"],[8],[8],[0,\"   \\n          \\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default ados-gray-btn\"],[9,\"data-dismiss\",\"modal\"],[7],[0,\"Close\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" fixed navbar \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"navbar navbar-default fixed-top nav-ados\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"container logo-container\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"navbar-header\"],[7],[0,\"\\n      \"],[2,\"\\n          <button aria-controls=\\\"navbar\\\" aria-expanded=\\\"false\\\" data-target=\\\"#navbar\\\" data-toggle=\\\"collapse\\\" class=\\\"navbar-toggle collapsed\\\" type=\\\"button\\\">\\n            <span class=\\\"sr-only\\\">Toggle navigation</span>\\n            <span class=\\\"icon-bar\\\"></span>\\n            <span class=\\\"icon-bar\\\"></span>\\n            <span class=\\\"icon-bar\\\"></span>\\n          </button>\\n          \"],[0,\"\\n      \"],[6,\"a\"],[9,\"href\",\"#\"],[9,\"class\",\"navbar-brand logo-ados\"],[7],[6,\"img\"],[9,\"src\",\"assets/images/tribeOSLogo.svg\"],[7],[8],[8],[0,\" \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"style\",\"float:right; font-size:24px; padding-top:10px\"],[7],[6,\"a\"],[9,\"href\",\"#\"],[7],[0,\"Logout\"],[8],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"container ad-container\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n    \\n    \\n    \"],[6,\"div\"],[9,\"class\",\"col-md-4 col-sm-4 col-xs-12 marBot\"],[9,\"id\",\"appWrapper\"],[7],[0,\"\\n      \"],[6,\"ul\"],[9,\"id\",\"sortable3\"],[9,\"class\",\"connectedSortable\"],[7],[0,\"\\n      \"],[6,\"li\"],[9,\"class\",\"boxgrid\"],[7],[0,\"\\n          \"],[6,\"ul\"],[9,\"class\",\"list-group\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item nopad\"],[9,\"style\",\"text-align:center\"],[7],[0,\" \"],[6,\"span\"],[7],[6,\"img\"],[9,\"style\",\"width:100%\"],[9,\"src\",\"assets/images/db_img.jpg\"],[7],[8],[8],[0,\" \\n            \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#dashboard\"],[9,\"href\",\"#\"],[7],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"img-title\"],[7],[0,\" \"],[6,\"span\"],[9,\"class\",\"title dBlock\"],[7],[0,\"Dashboard\"],[8],[0,\" \"],[8],[0,\"\\n            \"],[8],[0,\" \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"li\"],[9,\"class\",\"boxgrid\"],[7],[0,\"\\n          \"],[6,\"ul\"],[9,\"class\",\"list-group\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\" \"],[6,\"span\"],[9,\"class\",\"circle\"],[7],[6,\"img\"],[9,\"src\",\"assets/images/icon_stat.png\"],[7],[8],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"title\"],[7],[0,\"Threats Summary\"],[8],[8],[0,\"\\n            \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#threatsSummary\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Summary \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n            \\n            \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#badbots\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Automated Traffic \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#threatsbyorg\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Traffic by Organization \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"           \\n            \"],[8],[0,\" \\n            \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#malicious\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Suspicious Countries \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"li\"],[9,\"class\",\"boxgrid\"],[7],[0,\"\\n          \"],[6,\"ul\"],[9,\"class\",\"list-group\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\" \"],[6,\"span\"],[9,\"class\",\"circle\"],[7],[6,\"img\"],[9,\"src\",\"assets/images/icon_sell.png\"],[7],[8],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"title\"],[7],[0,\"Summary Reports\"],[8],[8],[0,\"\\n            \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#clickfraud\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Click Fraud \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\" \\n            \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#captchareq\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Captcha Requests \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#goodbots\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Desirable Automated Traffic \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#targetcon\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Targeted Content \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \\n        \\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \\n    \"],[6,\"div\"],[9,\"class\",\"col-md-4 col-sm-4 col-xs-12 marBot\"],[9,\"id\",\"appWrapper\"],[7],[0,\"\\n      \"],[6,\"ul\"],[9,\"id\",\"sortable2\"],[9,\"class\",\"connectedSortable\"],[7],[0,\"\\n        \\n        \"],[6,\"li\"],[9,\"class\",\"boxgrid\"],[7],[0,\"\\n          \"],[6,\"ul\"],[9,\"class\",\"list-group\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\" \"],[6,\"span\"],[9,\"class\",\"circle\"],[7],[6,\"img\"],[9,\"src\",\"assets/images/icon_settings.png\"],[7],[8],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"title\"],[7],[0,\"Settings\"],[8],[8],[0,\"\\n            \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#contentprotect\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Content Protection \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\" \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#custompage\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Custom Pages \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\" \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#ipaccess\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"IP Access List \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\" \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#countryblock\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Country Block List \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#contentdis\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Content Distribution \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#accountman\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Account Management \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"li\"],[9,\"class\",\"boxgrid\"],[7],[0,\"\\n          \"],[6,\"ul\"],[9,\"class\",\"list-group\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item nopad\"],[9,\"style\",\"text-align:center\"],[7],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#auditlog\"],[9,\"href\",\"#\"],[7],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"img-title\"],[7],[0,\" \"],[6,\"span\"],[9,\"class\",\"title dBlock\"],[7],[0,\"Complete Log\"],[8],[0,\" \"],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"li\"],[9,\"class\",\"boxgrid\"],[7],[0,\"\\n          \"],[6,\"ul\"],[9,\"class\",\"list-group\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\" \"],[6,\"span\"],[9,\"class\",\"circle\"],[7],[6,\"img\"],[9,\"src\",\"assets/images/icon_buy.png\"],[7],[8],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"title\"],[7],[0,\"Traffic Summary\"],[8],[8],[0,\"\\n            \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#trafficSummary\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Summary \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\" \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#cacheanalysis\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Cache Analysis \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\" \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#upstream\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Upstream HTTP Errors \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-4 col-sm-4 col-xs-12 marBot\"],[9,\"id\",\"appWrapper\"],[7],[0,\"\\n      \"],[6,\"ul\"],[9,\"id\",\"sortable1\"],[9,\"class\",\"connectedSortable\"],[7],[0,\"        \\n        \\n        \"],[6,\"li\"],[9,\"class\",\"boxgrid\"],[7],[0,\"\\n          \"],[6,\"ul\"],[9,\"class\",\"list-group\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\" \"],[6,\"span\"],[9,\"class\",\"circle\"],[7],[6,\"img\"],[9,\"src\",\"assets/images/icon_support.png\"],[7],[8],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"title\"],[7],[0,\"Protection Summary\"],[8],[8],[0,\"\\n            \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#trapSummary\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Overview \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\" \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#knownviolators\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Known Violators \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\" \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#javacheck\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"JavaScript Check Failed \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#javanot\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"JavaScript Not Loaded \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#knownviolatorsagent\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Known Violator User Agent \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#baduser\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Suspicious User Agents\"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#browserinteg\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Browser Integrity Check \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#knownviolatorscenter\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Known Violator Data Center \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#pagespermin\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Pages Per Minute Exceeded \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#sessionlength\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Session Length Exceeded \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#pagesperses\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Pages Per Session Exceeded \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#blockedcountry\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Blocked Country \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#agguser\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Aggregator User Agents \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"a\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#knownviolatorstool\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"list-group-item\"],[7],[0,\"Known Violator Automation Tool \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-menu-right small-icon\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "adshield-front/templates/dash.hbs" } });
});
define("adshield-front/templates/ipaccesslist", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "39g2otVI", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\\t\"],[6,\"div\"],[9,\"class\",\"col-md-12\"],[7],[0,\"\\n\\t\\t\"],[6,\"h3\"],[7],[0,\"Api Access List\"],[8],[0,\"\\n\\t\\t\"],[6,\"form\"],[9,\"class\",\"form-inline\"],[7],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n\\t\\t\\t\\t\"],[6,\"label\"],[7],[0,\"From this date \"],[8],[0,\"\\n\\t\\t\\t\\t\"],[1,[25,\"input\",null,[[\"type\",\"class\",\"name\",\"value\"],[\"date\",\"form-control\",\"dateFrom\",[20,[\"filter\",\"dateFrom\"]]]]],false],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n\\t\\t\\t\\t\"],[6,\"label\"],[7],[0,\" up to \"],[8],[0,\"\\n\\t\\t\\t\\t\"],[1,[25,\"input\",null,[[\"type\",\"class\",\"name\",\"value\"],[\"date\",\"form-control\",\"dateTo\",[20,[\"filter\",\"dateTo\"]]]]],false],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"button\"],[9,\"class\",\"btn\"],[3,\"action\",[[19,0,[]],\"refresh\"]],[7],[0,\"Refresh\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\\t\"],[6,\"div\"],[9,\"class\",\"col-md-12\"],[7],[0,\"\\n\"],[4,\"data-table\",null,[[\"source\",\"nextPage\",\"firstPage\",\"lastPage\",\"previousPage\"],[[20,[\"listData\"]],\"nextPage\",\"firstPage\",\"lastPage\",\"previousPage\"]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\t\"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "adshield-front/templates/ipaccesslist.hbs" } });
});
define("adshield-front/templates/stats", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OeSSg3v3", "block": "{\"symbols\":[\"statData\"],\"statements\":[[6,\"div\"],[9,\"class\",\"container-fluid\"],[7],[0,\"\\n\"],[6,\"h1\"],[9,\"style\",\"color:#ccc\"],[7],[0,\"Adshield\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\\n\\t\"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n\\t\\t\"],[6,\"div\"],[9,\"class\",\"statBox\"],[7],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"statBoxHeader\"],[7],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"text-center\"],[7],[0,\"URL Referrals this Month\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"filteredStats\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"statBoxData\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"value\"],[7],[1,[25,\"format-number\",[[19,1,[\"count\"]]],null],false],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"label\"],[7],[1,[19,1,[\"title\"]],false],[8],[0,\"\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n\\t\\t\"],[6,\"div\"],[9,\"class\",\"statBox\"],[7],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"statBoxHeader\"],[7],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"text-center\"],[7],[0,\"Requests Handled This Month\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[7],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"statBoxData text-center\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"transactions\"],[7],[1,[25,\"format-number\",[[20,[\"stat\",\"stat\",\"transactions\",\"today\"]]],null],false],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\" today\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"statBoxData text-center\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"transactions\"],[7],[1,[25,\"format-number\",[[20,[\"stat\",\"stat\",\"transactions\",\"week\"]]],null],false],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\" this week\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"statBoxData text-center\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"transactions\"],[7],[1,[25,\"format-number\",[[20,[\"stat\",\"stat\",\"transactions\",\"month\"]]],null],false],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\" this month\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n\\t\\t\"],[6,\"div\"],[9,\"class\",\"statBox\"],[7],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"statBoxHeader\"],[7],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"text-center\"],[7],[0,\"Ad Clicks Detected\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[7],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"statBoxData text-center\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"transactions\"],[7],[1,[25,\"format-number\",[[20,[\"stat\",\"stat\",\"adClicks\",\"today\"]]],null],false],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\" today\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"statBoxData text-center\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"transactions\"],[7],[1,[25,\"format-number\",[[20,[\"stat\",\"stat\",\"adClicks\",\"week\"]]],null],false],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\" this week\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"statBoxData text-center\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"span\"],[9,\"class\",\"transactions\"],[7],[1,[25,\"format-number\",[[20,[\"stat\",\"stat\",\"adClicks\",\"month\"]]],null],false],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"label\"],[7],[0,\" this month\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[9,\"style\",\"margin-top: 10px;\"],[7],[0,\"\\n\\t\\t\"],[6,\"div\"],[9,\"class\",\"statBox\"],[7],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"statBoxHeader\"],[7],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"text-center\"],[7],[0,\"Live Requests Received\"],[8],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[7],[0,\"\\n\\t\\t\\t\\t\"],[1,[25,\"ember-chart\",null,[[\"type\",\"data\",\"options\",\"animate\"],[\"line\",[20,[\"chartData\"]],[20,[\"chartOptions\"]],true]]],false],[0,\"\\n\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[9,\"class\",\"col-md-8\"],[9,\"style\",\"margin-top: 10px;\"],[7],[0,\"\\n\\t\\t\"],[6,\"div\"],[9,\"class\",\"statBox\"],[7],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[7],[0,\"\\n\"],[4,\"leaflet-map\",null,[[\"lat\",\"lng\",\"zoom\"],[[20,[\"lat\"]],[20,[\"lng\"]],[20,[\"zoom\"]]]],{\"statements\":[[0,\"\\t\\t\\t\\t\\t\"],[1,[25,\"tile-layer\",null,[[\"url\"],[\"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\\n\\t\"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[9,\"style\",\"margin-top: 10px;\"],[7],[0,\"\\n\\t\\t\"],[6,\"div\"],[9,\"class\",\"statBox\"],[7],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\\n\"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "adshield-front/templates/stats.hbs" } });
});


define('adshield-front/config/environment', [], function() {
  var prefix = 'adshield-front';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("adshield-front/app")["default"].create({"LOG_RESOLVER":true,"LOG_ACTIVE_GENERATION":true,"LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"LOG_VIEW_LOOKUPS":true,"name":"adshield-front","version":"0.0.0+52706b1a"});
}
//# sourceMappingURL=adshield-front.map

define("adshield-front/routes/stats", ["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({

		model() {
			return [{
				title: "Traffic",
				data: [{
					title: "IFramed",
					amount: 0
				}, {
					title: "Direct",
					amount: 9
				}]
			}, {
				title: "Referrals",
				data: [{
					title: "Unsafe",
					amount: 0
				}, {
					title: "Safe",
					amount: 0
				}, {
					title: "Unknown",
					amount: 0
				}]
			}];
		}

	});
});
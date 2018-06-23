import Component from '@ember/component';
import Ember from 'ember';
import { computed } from "@ember/object";

export default Component.extend({


	session : Ember.inject.service('session'),

	user : null,

	isLoggedIn : false,
	isLoginPanelShown : false,


	didRender : function() {
		this._super(...arguments);
		let self = this;
		let session = this.get("session");
		let promise = session.validateToken();
		promise.then(function(data) {
			if (data.get("valid")) {
				self.get("session").set("isAuthenticated", true);
			} else {
				self.get("session").set("isAuthenticated", false);
				self.logout();
			}
		});
	},


	user : computed(function() {
		let user = this.get('session.data.authenticated');
		return user;
	}),


	logout : function() {
		let self = this;
		this.get("session").invalidate().then(() => {
			self.sendAction("didLogOut");
		});
	},

	actions : {

		showLogin() {
			this.set("isLoginPanelShown", true);
		},
		
		/**
		 * logs out the user
		 * @return {[type]} [description]
		 */
		invalidateSession() {
			this.logout();
		}

	}

});

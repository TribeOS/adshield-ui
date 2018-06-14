import Component from '@ember/component';
import Ember from 'ember';
import { computed } from "@ember/object";

export default Component.extend({


	session : Ember.inject.service('session'),

	user : null,

	isLoggedIn : false,
	isLoginPanelShown : false,

	user : computed(function() {
		let user = this.get('session.data.authenticated');
		return user;
	}),

	actions : {

		showLogin() {
			this.set("isLoginPanelShown", true);
		},
		
		/**
		 * logs out the user
		 * @return {[type]} [description]
		 */
		invalidateSession() {
			let self = this;
			this.get("session").invalidate().then(() => {
				self.sendAction("didLogOut");
			});
		}

	}

});

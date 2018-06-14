import Component from '@ember/component';
import Ember from 'ember';


export default Component.extend({


	session : Ember.inject.service('session'),

	user : null,

	isLoggedIn : false,
	isLoginPanelShown : false,


	actions : {
		showLogin() {
			this.set("isLoginPanelShown", true);
		},
		didUserLoggedIn() {
			this.set("isLoggedIn", true);
			this.set("user", this.get("session").getUser());
		}
	}

});

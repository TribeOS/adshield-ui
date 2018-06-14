import Component from '@ember/component';
import Ember from 'ember';


export default Component.extend({

	session : Ember.inject.service('session'),

	identification : null,
	password : null,
	isShown : false,
	loginError : null,


	actions : {
		authenticate() {
			let self = this;
			this.set("isLoginError", false);
			let { identification, password } = this.getProperties('identification', 'password');
			this.get("session").authenticate('authenticator:oauth2', identification, password).catch((reason) => {
		        this.set('isLoginError', reason.error || reason);
			});
			// promise.then(() => {
			// 	//once we logged in, call this VVV
			// 	self.get("didUserLoggedIn")();
			// 	self.set("isShown", false);
			// })
		},
		onHide() {
			this.set("isLoginError", false);
			this.set("isShown", false);
			this.sendAction("onHide");
		}
	}

});

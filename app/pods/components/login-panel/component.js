import Component from '@ember/component';
import Ember from 'ember';


export default Component.extend({

	session : Ember.inject.service('session'),

	identification : null,
	password : null,
	isShown : false,
	loginError : null,

	newUser : {
		firstName : "",
		lastName : "",
		username : "",
		company : "",
		email : "",
		password : "",
	},


	didRender() {
		if (this.get("session").isAuthenticated)
		{
			this.set("isShown", false);
			this.sendAction("didLoggedIn");
		}
		this.$("#log-username").focus();
	},

	actions : {
		authenticate() {
			let self = this;
			this.set("isLoginError", false);
			let { identification, password } = this.getProperties('identification', 'password');
			this.get("session").authenticate('authenticator:oauth2', identification, password).then(
				() => {
					//success
					self.set("isShown", false);
					self.sendAction("didLoggedIn");
				},
				(err) => {
					//error
					self.get('notifications').error(err, { autoClear : true });
				}
			);
		},
		onHide() {
			this.set("isLoginError", false);
			this.set("isShown", false);
		},


		/**
		 * send user information to controller for execution
		 * @return {[type]} [description]
		 */
		signup() {
			this.sendAction("onSignUp", this.newUser);
		},

	}

});

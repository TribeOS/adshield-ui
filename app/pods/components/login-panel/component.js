import Component from '@ember/component';
import Ember from 'ember';


export default Component.extend({

	session : Ember.inject.service('session'),

	identification : null,
	password : null,
	isShown : false,
	loginError : null,
	
	isResetPassword : false,
	resetEmail : "", //contains the email address of the user requesting for password reset


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
			//get timezone offset 
			var offset = new Date().getTimezoneOffset();
			offset = (offset < 1 ? "+" : "-") + (Math.abs(offset) / 60);

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
			this.onSignUp(this.newUser);
		},


		showResetPassword() {
			this.set("isResetPassword", !this.get("isResetPassword"));
		},

		resetPassword() {
			this.onReset(this.resetEmail);
		},

	}

});

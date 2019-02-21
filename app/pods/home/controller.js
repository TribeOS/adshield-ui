import Controller from '@ember/controller';
import { computed } from "@ember/object";
import { inject as service } from '@ember/service';

export default Controller.extend({


	session : Ember.inject.service('session'),

	//flag for signup result
	signingUp : true,
	signUpError : false,


	actions : {

		didLoggedIn() {
			this.transitionToRoute("index");
		},	


		/**
		 * sign up new user to backend
		 * @return {[type]} [description]
		 */
		onSignUp(user) {
			let self = this;
			self.set("signUpError", false);
			let account = this.get("store").createRecord("account", user);
			account.save().then(function() {
				self.set("signingUp", false);
				self.get('notifications').success("Please complete your registration through the email we sent to you. Thanks.", { autoClear : true });
			}).catch(function(error) {
				let err = "";
				if (typeof error.errors !== "undefined") {
					err = error.errors[0].detail;
				} else {
					err = error;
				}
				self.get('notifications').error(err, { autoClear : true });
			});
		},

	}
	

});

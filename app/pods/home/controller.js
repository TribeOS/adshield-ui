import Controller from '@ember/controller';
import { computed } from "@ember/object";
import { inject as service } from '@ember/service';

export default Controller.extend({


	session : Ember.inject.service('session'),

	//flag for signup result
	signingUp : true,


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
			let account = this.get("store").createRecord("account", user);
			account.save().then(function() {
				self.set("signingUp", false);
				alert("Please complete your registration through the email we sent to you. Thanks.");
			}).catch(function(error) {
				if (typeof error.errors !== "undefined") {
					alert(error.errors[0].detail);
				} else {
					alert(error);
				}
			});
		},

	}
	

});

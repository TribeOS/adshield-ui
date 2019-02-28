import Controller from '@ember/controller';
import { computed } from "@ember/object";
import { inject as service } from '@ember/service';

export default Controller.extend({


	session : Ember.inject.service('session'),
	ajax : Ember.inject.service('ajax'),

	//flag for signup result
	signingUp : true,
	signUpError : false,

	//reset response we get from the server
	resetResponse : "",


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


		onResetPassword(email) {
			//send reset password to server
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		    if (!re.test(String(email).toLowerCase())) {
		    	this.get("notifications").error("Invalid email address.", { autoClear : true });
 				return;
		    }
		    var self = this;
		    var notif = self.get("notifications").info("Requesting password reset...");
		    this.get('ajax').post('/requestPassword', {
		        data: {
		          email : email
		        }
	      	}).then(function(response) {
	      		self.get("notifications").removeNotification(notif);
	      		self.get("notifications").success("Please check your email for instructions on how to reset your password.", { autoClear : true });
		    }, function(response) {
		    	self.get("notifications").removeNotification(notif);
		    	self.get("notifications").error(response, { autoClear : true });
		    });
		}

	}
	

});

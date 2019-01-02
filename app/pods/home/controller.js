import Controller from '@ember/controller';
import { computed } from "@ember/object";
import { inject as service } from '@ember/service';

export default Controller.extend({


	session : Ember.inject.service('session'),


	actions : {

		didLoggedIn() {
			this.transitionToRoute("index");
		},	


		/**
		 * sign up new user to backend
		 * @return {[type]} [description]
		 */
		onSignUp(user) {
			console.log(user);
		},

	}
	

});

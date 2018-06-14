import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({


	actions : {

		didLoggedIn() {
			this.transitionToRoute("index");
		},
		onHide() {
			this.transitionToRoute("home");
		}

	}
	

});

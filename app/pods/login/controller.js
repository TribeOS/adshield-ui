import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({


	init : function() {
		this._super(...arguments);
		this.transitionToRoute("home");
	}
	

});

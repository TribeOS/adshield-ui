import Component from '@ember/component';
import { computed } from "@ember/object";


export default Component.extend({

	filter : computed(function() {
		return {};
	}),

	actions : {
		nextPage() {
			this.sendAction("nextPage");
		},
		firstPage() {
			this.sendAction("firstPage");
		},
		lastPage() {
			this.sendAction("lastPage");
		},
		previousPage() {
			this.sendAction("previousPage");
		},
		refresh(filter) {
			this.sendAction("refresh", filter);
		}
	}

});

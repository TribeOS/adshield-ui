import Component from '@ember/component';
import { computed } from "@ember/object";

export default Component.extend({	

	actions : {
		firstPage() {
			this.sendAction("firstPage");
		},
		previousPage() {
			this.sendAction("previousPage");
		},
		nextPage() {
			this.sendAction("nextPage");
		},
		lastPage() {
			this.sendAction("lastPage");
		},
		onItemClick(item) {
			this.sendAction("onClick", item);
		}
	}

});

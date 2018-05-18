import Component from '@ember/component';
import { computed } from "@ember/object";

export default Component.extend({

	// pageCount : computed(function() {
	// 	const total = this.get('source.last_page') || this.get('source.current_page');
	// 	if (!total) return [];
	// 	return new Array(total+1).join('x').split('').map((e,i) => i+1);
	// }),	
	

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
		rowClicked(row) {
			this.sendAction("rowClicked", row);
		}
	}

});

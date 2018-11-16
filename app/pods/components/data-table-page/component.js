import Component from '@ember/component';

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
		}
	}

});

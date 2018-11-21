import Component from '@ember/component';


export default Component.extend({

	actions : {
		firstPage() {
			this.sendAction("gotoPage", 1);
		},
		previousPage() {
			let page = this.source.current_page - 1;
			if (page < 1) return;
			this.sendAction("gotoPage", page);
		},
		nextPage() {
			let page = this.source.current_page + 1;
			if (page > this.source.last_page) return;
			this.sendAction("gotoPage", page);
		},
		lastPage() {
			this.sendAction("gotoPage", this.source.last_page);
		},
		gotoPage(page) {
			this.sendAction("gotoPage", page);
		}
	}

});

import Component from '@ember/component';


export default Component.extend({

	actions : {
		firstPage() {
			this.gotoPage(1);
		},
		previousPage() {
			let page = this.source.current_page - 1;
			if (page < 1) return;
			this.gotoPage(page);
		},
		nextPage() {
			let page = this.source.current_page + 1;
			if (page > this.source.last_page) return;
			this.gotoPage(page);
		},
		lastPage() {
			this.gotoPage(this.source.last_page);
		},
		gotoPage(page) {
			this.gotoPage(page);
		}
	}

});

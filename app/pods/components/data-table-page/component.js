import Component from '@ember/component';
import { computed } from "@ember/object";


export default Component.extend({

	pages : [],


	didUpdateAttrs() {
 	   	this._super(...arguments);
 
		let pg = [];
		if (this.source == null) return;
		if (this.source.total == 0) return;

		if (this.source.last_page <= 5) {
			for(var i = 1; i <= this.source.last_page; i++) {
				pg.push(i);
			}
			this.set("pages", pg);
			return;
		}

		pg.push(1);
		//get half
		//get 2 pages left
		//get 2 pages right
		// let mid = Math.floor(this.source.last_page / 2);
		let mid = this.source.current_page;
		if (mid  - 3 > 1) pg.push("..");
		for(var i = 3; i > 0; i --) {
			if (mid - i <= pg[0]) continue;
			pg.push(mid - i);
		}
		if (mid > 1 && mid < this.source.last_page) pg.push(mid);

		for(var i = 1; i < 4; i++) {
			if (mid + i >= this.source.last_page) continue;
			pg.push(mid + i);
		}
		if (mid  + 3 < this.source.last_page) pg.push("..");
		pg.push(this.source.last_page);

		this.set("pages", pg);

	},


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

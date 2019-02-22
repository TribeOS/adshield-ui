import Component from '@ember/component';


/**
 * IMPT:::
 * this component is only used for listing of IP's and their number of requests
 * specifically for the Protection Summary reports pages.
 * all of these pages have IP's and # of requests in them. a total of 12 pages is using this component
 * @param  {[type]} options.actions  :             {		gotoPage(page) {			this.gotoPage(page); [description]
 * @param  {[type]} onItemClick(item [description]
 * @return {[type]}                  [description]
 */
export default Component.extend({	

	actions : {
		gotoPage(page) {
			this.gotoPage(page);
		},
		onItemClick(item) {
			this.sendAction("onClick", item);
		}
	}

});

import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({


	listModel : "ipaccesslist",

	init : function() {
		this.filter = { dateFrom : "", dateTo : "", userKey : "" };
		this.sort = { by : "date_added", dir : "asc" };
	},

	refreshList : function(page, limit, filter, sort) {
		var self = this;
		this.showBusy("Fetching data ...");
		this.set("listData", null);
		self.get('store').queryRecord("ipaccesslist", { page : page, limit : limit, filter : filter, sort : sort }).then(function(data) {
			self.set("model", data);
			self.set("listData", self.get("model").get("listData"));
			self.hideBusy();
		});
	},

	actions : {
		
		gotoPage(page) {
			this.page = page;
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},

		refreshData() {
			this.refreshList(1, this.limit, this.filter, this.sort);
		},
		/**
		 * gets called when UI is loaded
		 */
		refresh() {
			this.set("page", 1);
			let self = this;
			this.fetchMySites(function(data) {
				self.filter.userKey = self.userWebsites.objectAt(0).get("userKey");
				self.refreshList(1, self.limit, self.filter, self.sort);
			});
		},
		onSelectSite(item) {
			this.filter.userKey = item;
			this.set("page", 1);
			this.refreshList(1, this.limit, this.filter, this.sort);
		},
	}

});

import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({


	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "7", status : 0, ip : "" };
		this.sort = { by : "last_updated", dir : "asc" };
	},


	fetchData : function() {
		var self = this;
		this.showBusy("Fetching data ...");
		self.get('store').queryRecord("completeLog", { page : this.page, limit : this.limit, filter : this.filter }).then(function(data) {
			let listData = data.get("listData");
			self.set("listData", listData);
			self.hideBusy();
		});
	},
	

	actions : {
		refresh() {
			this.set("page", 1);
			this.fetchData();
		},
		onHide() {
			this.transitionToRoute("index");
		},

		fetchData() {
			this.fetchData();
		},

		gotoPage(page) {
			this.page = page;
			this.fetchData();
		},
		onSelectDay(value) {
			this.filter.duration = value;
			this.fetchData();
		},
		
	},

});

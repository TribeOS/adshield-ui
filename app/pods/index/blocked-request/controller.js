import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({


	chartData : computed(function() {}),

	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "7", status : 0, ip : "" };
		this.sort = { by : "last_updated", dir : "asc" };
	},


	refreshList : function(page, limit, filter, sort) {
		var self = this;
		this.showBusy("Fetching data ...");
		self.get('store').queryRecord("blockedRequest", { page : page, limit : limit, sort : sort, filter : filter }).then(function(data) {
			let pageData = data.get("pageData");
			let chartData = {};
			chartData.totalTrafficVsBlocked = self.generateChartData(pageData.totalTrafficVsBlocked);
			chartData.blockedRequests = self.generateChartData(pageData.blockedRequests);
			self.set("chartData", chartData);

			let listData = pageData.listData;
			self.set("listData", listData);
			self.hideBusy();
		});
	},


	actions : {
		onSelectDay(value) {
			this.page = 1;
			this.filter.duration = value;
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		onRefresh() {
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		refresh() {
			let self = this;
			this.fetchMySites(function(data) {
				self.filter.userKey = self.userWebsites[0].userKey;
				self.refreshList(self.page, self.limit, self.filter, self.sort);
			});
		},
		onHide() {
			this.transitionToRoute("index");
		},

		onSelectSite(item) {
        	this.filter.userKey = item;
        	this.refreshList(this.page, this.limit, this.filter, this.sort);
        },

        gotoPage(page) {
			this.page = page;
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
	},

});

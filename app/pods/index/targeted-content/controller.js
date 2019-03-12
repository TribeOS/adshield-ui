import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({


	chartData : computed(function() {}),

	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "0", status : 0, ip : "" };
		this.sort = { by : "last_updated", dir : "asc" };
	},


	refreshList : function(page, limit, filter, sort) {
		var self = this;
		this.showBusy("Fetching data ...");
		self.get('store').queryRecord("targetedContent", { page : page, limit : limit, filter : filter, sort : sort }).then(function(data) {
			let pageData = data.get("pageData");
			let chartData = {};
			chartData.responseCodesByTotalPercentage = self.generateChartData(pageData.responseCodesByTotalPercentage);
			self.set("chartData", chartData);

			let listData = pageData.listData;
			listData.data.forEach(function(i) {
				i.path = decodeURIComponent(i.path);
			});
			self.set("listData", listData);
			self.hideBusy();
		});
	},


	actions : {
		onSelectDay(value) {
			this.filter.duration = value;
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		refresh() {
			let self = this;
            this.set("page", 1);
            this.fetchMySites(function(data) {
            	self.filter.userKey = self.userWebsites[0].userKey;
            	self.refreshList(self.page, self.limit, self.filter, self.sort);
            });
		},
		onHide() {
			this.transitionToRoute("index");
		},

		fetchData() {
			let self = this;
        	self.refreshList(self.page, self.limit, self.filter, self.sort);
		},
		onSelectSite(item) {
        	let self = this;
        	this.set("page", 1);
        	self.filter.userKey = item;
        	self.refreshList(self.page, self.limit, self.filter, self.sort);
        },
        gotoPage(page) {
			this.page = page;
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},

	},

});

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
		self.get('store').queryRecord("captchaRequest", { filter : filter }).then(function(data) {
			let pageData = data.get("pageData");
			let chartData = {};
			chartData.totalTrafficVsCaptcha = self.generateChartData(pageData.totalTrafficVsCaptcha);
			chartData.attemptsSolvedVsFailed = self.generateChartData(pageData.attemptsSolvedVsFailed);
			chartData.captchaRequests = self.generateChartData(pageData.captchaRequests);

			self.set("chartData", chartData);
		});
	},


	actions : {
		onSelectDay(value) {
			this.filter.duration = value;
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},

		onRefresh() {
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},

		refresh() {
			let self = this;
			this.fetchMySites(function(data) {
				self.filter.userKey = self.userWebsites.objectAt(0).get("userKey");
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
	},

});

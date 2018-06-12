import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({


	chartData : computed(function() {}),

	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "0", status : 0, ip : "" };
		this.sort = { by : "last_updated", dir : "asc" };
	},


	fetchData : function() {
		var self = this;
		self.get('store').queryRecord("captchaRequest", { filter : self.filter }).then(function(data) {
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
		},
		refresh() {
			this.fetchData();
		},
		onHide() {
			this.transitionToRoute("index");
		},
	},

});

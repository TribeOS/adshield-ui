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
		self.get('store').queryRecord("clickFraudReport", { filter : filter }).then(function(data) {
			let pageData = data.get("pageData");
			let chartData = {};
			chartData.automatedClicksVsAdClicks = self.generateChartData(pageData.automatedClicksVsAdClicks);
			chartData.topAgencyByAutomatedClicks = self.generateChartData(pageData.topAgencyByAutomatedClicks);
			chartData.clickFraudActivity = self.customChartData(pageData.clickFraudActivity);

			self.set("chartData", chartData);
		});
	},

	customChartData : function(graphData) {
		let chartData = {};
		chartData.datasets = [];
		chartData.labels = graphData.label;
		chartData.datasets.push({
			label : "Daily Click Fraud Activity",
			data : graphData.data,
		});
		return chartData;
	},


	actions : {
		onSelectDay(value) {
			this.filter.duration = value;
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		refresh() {
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		onHide() {
			this.transitionToRoute("index");
		},
	},

});

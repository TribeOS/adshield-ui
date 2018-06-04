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
		self.get('store').queryRecord("clickFraudReport", { filter : self.filter }).then(function(data) {
			let pageData = data.get("pageData");
			let chartData = {};
			chartData.automatedClicksVsAdClicks = self.generateChartData(pageData.automatedClicksVsAdClicks);
			chartData.topAgencyByAutomatedClicks = self.generateChartData(pageData.topAgencyByAutomatedClicks);
			chartData.clickFraudActivity = self.generateGraphData(pageData.clickFraudActivity);

			self.set("chartData", chartData);
		});
	},

	generateGraphData : function(graphData) {
		let chartData = {};
		chartData.datasets = [];
		chartData.labels = graphData.label;
		chartData.datasets.push({
			label : "Daily Click Fraud Activity",
			data : graphData.data,
		});
		return chartData;
	},

	graphOption : computed(function() {
		var options = {
			title : {
				text : "test"
			},
			legend:{
				display : true,
			},
			tooltips : {
				enabled : true
			},
		}
		return options;
	}),


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

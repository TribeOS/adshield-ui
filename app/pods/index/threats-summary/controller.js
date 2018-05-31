import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({

	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "0", status : 0, ip : "" };
		this.sort = { by : "last_updated", dir : "asc" };
	},


	refreshGraph : function() {
		let self = this;
		self.get('store').queryRecord("threatGraph", { }).then(function(data) {
			let graphData = data.get("graphData");
			let chartData = {};
			chartData.automatedTrafficClassification = self.generateChartData(graphData.automatedTrafficClassification);
			chartData.topThreatsByCountry = self.generateChartData(graphData.topThreatsByCountry);
			chartData.threatsAverted = self.generateChartData(graphData.threatsAverted);
			self.set("chartData", chartData);
		});
	},

	generateChartData : function(graphData) {
		let chartData = {};
		chartData.datasets = [];
		chartData.labels = graphData.label;
		chartData.datasets.push({
			data : graphData.data,
			backgroundColor : [
				//we can add more colors here in order to accommodate more data columns
				'rgba(254,204,88,1)',
				'rgba(254,99,131,1)',
				'rgb(255, 159, 64)'
			],
		});
		return chartData;
	},


	chartOptions : computed(function() {
		var options = {
			legend:{
				display : true,
				position : "right"
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
			this.refreshGraph();
		},
		refresh() {
			this.refreshGraph();
		},
		onHide() {
			this.transitionToRoute("index");
		}
	}

});

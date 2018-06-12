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

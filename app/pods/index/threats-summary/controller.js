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
		this.showBusy('Fetching data ...');
		self.get('store').queryRecord("threatGraph", { filter : this.filter }).then(function(data) {
			let graphData = data.get("graphData");
			let chartData = {};
			chartData.automatedTrafficClassification = self.generateChartData(graphData.automatedTrafficClassification);
			chartData.topThreatsByCountry = self.generateChartData(graphData.topThreatsByCountry);
			chartData.threatsAverted = self.generateChartData(graphData.threatsAverted);
			self.set("chartData", chartData);
			self.hideBusy();
		});
	},


	actions : {
		onSelectDay(value) {
			this.filter.duration = value;
			this.refreshGraph();
		},
		fetchData() {
			let self = this;
			this.refreshGraph();
		},
		refresh() {
			let self = this;
            this.fetchMySites(function(data) {
            	self.filter.userKey = self.userWebsites[0].userKey;
            	self.refreshGraph();
            });
		},
		onHide() {
			this.transitionToRoute("index");
		},
		onSelectSite(item) {
        	let self = this;
        	self.filter.userKey = item;
        	self.refreshGraph();
        }, 
	}

});

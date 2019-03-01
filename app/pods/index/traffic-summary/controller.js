import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({


	record : null,

	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "0", status : 0, ip : "" };
		this.sort = { by : "last_updated", dir : "asc" };
	},


	fetchData : function() {
		var self = this;
		this.showBusy("Fetching data ...");
		let filter = this.get("filter");
		self.get('store').queryRecord("trafficSummary", { filter : filter }).then(function(data) {
			let pageData = data.get("pageData");
			pageData.threatResponseProtocolsUsed = self.generateChartData(pageData.threatResponseProtocolsUsed);
			pageData.threatsAverted = self.generateChartData(pageData.threatsAverted);
			pageData.trafficGraph = self.generateChartData(pageData.trafficGraph);

			self.set("chartData", pageData);
			self.hideBusy();
		});
	},


	graphOption : computed(function() {
		var options = {
			title : {
				text : "test"
			},
			legend:{
				display : true,
				position : "top",
			},
			tooltips : {
				enabled : true
			},
		}
		return options;
	}),


	actions : {
		refresh() {
			let self = this;
			this.fetchMySites(function(data) {
				self.filter.userKey = self.userWebsites.objectAt(0).get("userKey");
				self.fetchData();
			});
		},
		onRefresh() {
			this.fetchData();
		},
		onHide() {
			this.transitionToRoute("index");
		},
		onSave() {
			this.saveData();
		},
		onSelectDay(value) {
			this.filter.duration = value;
			this.fetchData();
		},

		onSelectSite(item) {
			this.filter.userKey = item;
			this.fetchData();
		}
		
	},

});

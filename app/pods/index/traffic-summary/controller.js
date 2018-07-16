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
		let filter = this.get("filter");
		self.get('store').queryRecord("trafficSummary", { filter : filter }).then(function(data) {
			let pageData = data.get("pageData");
			pageData.threatResponseProtocolsUsed = self.generateChartData(pageData.threatResponseProtocolsUsed);
			pageData.threatsAverted = self.generateChartData(pageData.threatsAverted);
			pageData.trafficGraph = self.generateChartData(pageData.trafficGraph);

			self.set("chartData", pageData);
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
		
	},

});

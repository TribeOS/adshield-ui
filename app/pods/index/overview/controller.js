import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({

	graphModelName : "protectionOverviewGraph",

	choiceDay : null,

	chartData : computed(function() {}),

	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "0"};
		this.sort = { by : "last_updated", dir : "asc" };
	},


	refreshGraph : function() {
		let self = this;
		self.get('store').queryRecord(this.graphModelName, { filter : this.filter }).then(function(data) {
			let chartData = self.generateChartData(data.get("graphData"));
			self.set("chartData", chartData);
			self.set("violatorInfo", graphData.info);
		});
	},


	chartOptions : computed(function() {
		var options = {
			legend:{
				display : false,
				position : "right"
			},
			tooltips : {
				enabled : true
			},
			scales : {
				xAxes : [{
					ticks : {
						min : 0,
						stepSize : 500,
					},
				}]
			},
		}
		return options;
	}),

	actions : {
		refresh() {
			this.set("page", 1);
			this.refreshGraph(this.page, this.limit, this.filter, this.sort);
		},
		onHide() {
			this.transitionToRoute("index");
		},
		onSelectDay(value) {
			this.filter.duration = value;
		},
	}

});

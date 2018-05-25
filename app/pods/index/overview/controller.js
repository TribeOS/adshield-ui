import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({

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
			let graphData = data.get("graphData");
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

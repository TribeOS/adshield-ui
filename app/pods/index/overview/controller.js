import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({

	graphModelName : "protectionOverviewGraph",

	choiceDay : null,

	chartData : computed(function() {}),

	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "7"};
		this.sort = { by : "last_updated", dir : "asc" };
	},


	refreshGraph : function() {
		let self = this;
		this.showBusy("Fetching data ...");
		self.get('store').queryRecord(self.graphModelName, { filter : self.filter }).then(function(data) {
			let chartData = self.generateChartData(data.get("graphData"));
			self.set("chartData", chartData);
			self.hideBusy();
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
					},
				}]
			},
		}
		return options;
	}),

	actions : {
		fetchData() {
			let self = this;
			self.refreshGraph(self.page, self.limit, self.filter, self.sort);
		},
		refresh() {
			let self = this;
            this.fetchMySites(function(data) {
            	self.filter.userKey = self.userWebsites[0].userKey;
            	self.refreshGraph(self.page, self.limit, self.filter, self.sort);
            });
		},
		onHide() {
			this.transitionToRoute("index");
		},
		onSelectDay(value) {
			this.filter.duration = value;
			this.refreshGraph(this.page, this.limit, this.filter, this.sort);
		},

        onSelectSite(item) {
        	let self = this;
        	self.filter.userKey = item;
        	self.refreshGraph(self.page, self.limit, self.filter, self.sort);
        }, 
	}

});

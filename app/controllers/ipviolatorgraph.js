import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({

	ip : "",
	filter : { dateFrom : "", dateTo : "", userKey : "", ip : "" },

	chartData : computed(function() {}),

	init : function() {
		this._super();
		this.refreshGraph(this.filter);
	},

	refreshGraph : function(filter) {
		var self = this;
		self.get('store').queryRecord("ipviolatorgraph", { filter : filter }).then(function(data) {
			self.set("model", data);
			var stat = self.get("model").get('graphData');
			var chartData = {};
			chartData.datasets = [];
			chartData.labels = stat.dates;
			chartData.datasets.push({
				label : "",
	            data : stat.totals,
				backgroundColor : [
					'rgba(109,186,252,1)',
					'rgba(109,186,252,1)'
				],
				borderColor: [
	                'rgba(109,186,252,1)',
	                'rgba(109,186,252,1)',
	            ],
	            borderWidth : 1
			});
			self.set("chartData", chartData);
		});
	},

	chartOptions : computed(function() {
		var options = {
			scales : {
				yAxes : [{
					ticks : {
						beginAtZero:true,
						stepSize : 1,
					}
				}],
				xAxes:[{
					ticks:{
						stepSize : 1
					}
				}]
			},
			legend:{
				display:false
			},
			title : {
				display : true,
				text : ""
			},
			tooltips : {
				enabled : true
			},
			elements : {
				point : {
					pointStyle : 'point',
					borderWidth : 1
				},
				line : {
					fill : false
				}
			}
		}
		return options;
	}),


	actions : {
		refresh() {
			this.refreshGraph(this.filter);
		}
	}

});

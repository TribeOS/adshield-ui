import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({

	queryParams : ['ip'],
	ip : null,
	filter : { dateFrom : "", dateTo : "", userKey : "", ip : "" },

	chartData : computed(function() {}),

	init : function() {
		this._super();
	},

	refreshGraph : function(filter) {
		let self = this;
		filter.ip = this.get("ip");
		self.get('store').queryRecord("ipviolatorgraph", { filter : filter }).then(function(data) {
			self.set("model", data);
			let stat = self.get("model").get('graphData');
			let chartData = {};
			chartData.datasets = [];
			chartData.labels = stat.dates;
			chartData.datasets.push({
				label : "",
	            data : stat.totals,
				backgroundColor : [
					'rgba(109,186,252,1)',
				],
				borderColor: [
	                'rgba(109,186,252,1)',
	            ],
	            borderWidth : 2
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
				display : false,
				text : "Recorded Stats"
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
					fill : true
				}
			},
			padding : {
				top : 50
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

import Component from '@ember/component';
import { computed } from "@ember/object";
import { later } from '@ember/runloop';

export default Component.extend({

	lat: 45.519743,
	lng: -122.680522,
	zoom: 1,
	lastGraphData : 0,

	didReceiveAttrs() {
		if (this.get("showLive") === true) this.updateGraph();
	},

	updateGraph : function() {
		var self = this;
		self.poll = function() {
			later(function() {
				let newValue = self.get("lastGraphData");
				self.set("lastGraphData", 0);
				let cData = self.get("chartData");
				if (typeof cData !==  'undefined') {
					let maxPoint = 60;
					if (cData.labels.length < maxPoint) cData.labels.push('');
					if (cData.datasets[0].data.length == maxPoint) cData.datasets[0].data.splice(0, 1);
					cData.datasets[0].data.push(newValue);
					self.set("chartData", cData);
					self.notifyPropertyChange('chartData');
				}
				self.poll();
			}, 2000);
		}
		self.poll();
	},

	chartOptions : computed(function() {
		var options = {
			scales : {
				yAxes : [{
					ticks : {
						beginAtZero:true,
						stepSize : 1
					}
				}],
				xAxes:[{
					ticks:{
						suggestedMax : 2,
						suggestedMin : 2,
						max : 5,
						min : 0,
						stepSize : 4
					}
				}]
			},
			legend:{
				display:false
			},
			title : {
				display : true,
				text : "Transactions for the past 2 minutes"
			},
			tooltips : {
				enabled : false
			},
			elements : {
				point : {
					pointStyle : 'triangle',
					borderWidth : 1
				},
				line : {
					fill : false
				}
			}
		}
		return options;
	}),

});

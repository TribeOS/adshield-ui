import Component from '@ember/component';
import { computed } from "@ember/object";
import { later } from '@ember/runloop';

export default Component.extend({

	lat: 45.519743,
	lng: -122.680522,
	zoom: 1,


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

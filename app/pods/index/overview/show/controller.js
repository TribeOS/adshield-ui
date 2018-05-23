import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
	modal: service('current-routed-modal'),
	init: function() {
		this._super(...arguments);
		this.ip = "";
		this.chartOptions = {
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
		};
	},
	actions: {
		ok: function() {
			// do something else
			this.get("modal").close();
		},
		cancel: function() {
			this.get("modal").close();
		}
	}
});
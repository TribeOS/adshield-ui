import Controller from '@ember/controller';
import { computed } from "@ember/object";
import { later } from '@ember/runloop';

export default Controller.extend({

	init : function() {
		this._super();
		var self = this;
		self.poll = function() {
			later(function() {
				self.get('store').findAll('adshieldstat').then(function(data) {
					self.set("model", data);
					var stat = self.model.get('firstObject').get('stat');
					var cData = self.get("chartData");
					var maxPoint = 60;
					if (cData.labels.length < maxPoint) cData.labels.push('');
					if (cData.datasets[0].data.length == maxPoint) cData.datasets[0].data.splice(0, 1);
					cData.datasets[0].data.push(stat.transactionsInterval);
					self.set("chartData", cData);
					self.notifyPropertyChange('chartData');

					self.set("filteredStats", stat);
					self.poll();
				});
			}, 2000);
		}
		self.poll();
	},

	/**
	 * parse stat JSON value so we can access from template with less issue
	 * @param  {[type]} ) {		var       model [description]
	 * @return {[type]}   [description]
	 */
	stat : computed(function() {
		var model = this.get('model');
		return model.get('firstObject');
	}),

	/**
	 * filtered stats to hide some data that aren't being used yet.
	 * no point of showing it yet
	 * @param  {[type]} ) {		var       model [description]
	 * @return {[type]}   [description]
	 */
	filteredStats : computed({
		get() {
			var model = this.get('model');
			var stats = model.get('firstObject').get('stat');
			var newstats = stats.stat.filter(function(item) {
				if (item.status == 6 || item.status == 1) return false;
				return true;
			});
			return newstats;
		},
		set(key, value) {
			var stats = value;
			var newstats = stats.stat.filter(function(item) {
				if (item.status == 6 || item.status == 1) return false;
				return true;
			});
			return newstats;
		}

	}),


	/**
	 * create a ChartJS compatible data source/struct
	 * @param  {[type]} ) {		var       model [description]
	 * @return {[type]}   [description]
	 */
	chartData : computed(function() {
		var model = this.get('model');
		var stat = model.get('firstObject').get('stat');
		var data = {};
		data.datasets = [];
		data.labels = [''];
		data.datasets.push({
			label : "Transactions",
            data : [stat.transactionsInterval],
			backgroundColor : [
				'rgba(109,186,252,1)',
				'rgba(109,186,252,1)'
			],
			borderColor: [
                'rgba(109,186,252,1)',
                'rgba(109,186,252,1)',
            ],
            borderWidth : 2
		});
		return data;
	}),

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

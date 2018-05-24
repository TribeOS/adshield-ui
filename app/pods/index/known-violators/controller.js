import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({

	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "0", status : 0, ip : "" };
		this.sort = { by : "last_updated", dir : "asc" };
	},

	refreshList : function(page, limit, filter, sort) {
		var self = this;
		self.get('store').queryRecord("knownViolator", { page : page, limit : limit, filter : filter, sort : sort }).then(function(data) {
			self.set("model", data);
			self.set("listData", self.get("model").get("listData"));
			var listData = self.get("listData");
			listData.headers = ['IP', '# of Violations'];
			listData.data.forEach((item, index) => {
				//use this code to turn a column value on the table into a link.
				let old = item.ip;
				item.ip = { 
					type : 'action', route : "ipviolatorgraph", 
					params : [
						"ipviolatorgraph", //route name
						{
							isQueryParams : true,
							values : {
								ip : old //route param:values
							}
						}
					],
					value : old
				}
			});
		});
	},


	refreshGraph : function(ip) {
		let self = this;
		this.filter.ip = ip;
		self.get('store').queryRecord("ipViolatorGraph", { filter : this.filter }).then(function(violator) {
			let graphData = violator.get("graphData");
			let chartData = {};
			chartData.datasets = [];
			chartData.labels = graphData.label;
			chartData.datasets.push({
				data : graphData.data,
				backgroundColor : [
<<<<<<< HEAD
					'rgba(109,186,252,1)',
					'rgba(109,16,22,1)',
=======
					'rgba(254,204,88,1)',
					'rgba(254,99,131,1)',
					'rgba(254,158,66,1)'
>>>>>>> 3d7640c5a1188492e3bdfa91659c8c2d2325f7c4
				],
			});
			self.set("chartData", chartData);
			self.set("violatorInfo", graphData.info);
		});
	},


	chartOptions : computed(function() {
		var options = {
			legend:{
				display:true
			},
			tooltips : {
				enabled : true
			},
		}
		return options;
	}),


});

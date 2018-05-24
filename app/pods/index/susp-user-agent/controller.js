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
		self.get('store').queryRecord("suspUserAgent", { page : page, limit : limit, filter : filter, sort : sort }).then(function(data) {
			var listData = data.get("listData");
			listData.headers = ['IP', '# of Violations'];
			listData.data.forEach((item, index) => {
				//use this code to turn a column value on the table into a link.
				let old = item.ip;
				item.ip = { 
					type : 'action', route : "", 
					params : [
						"", //route name
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
			self.set("listData", listData);
		});
	},


	refreshGraph : function(ip) {
		let self = this;
		this.filter.ip = ip;
		self.get('store').queryRecord("suspUserAgentGraph", { filter : this.filter }).then(function(data) {
			let graphData = data.get("graphData");
			let chartData = {};
			chartData.datasets = [];
			chartData.labels = graphData.label;
			chartData.datasets.push({
				data : graphData.data,
				backgroundColor : [
					'rgba(254,204,88,1)',
					'rgba(254,99,131,1)',
					'rgb(255, 159, 64)'
				],
			});
			self.set("chartData", chartData);
			self.set("violatorInfo", graphData.info);
		});
	},


});

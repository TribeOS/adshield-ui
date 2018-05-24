import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({

	page : 1,
	limit : 10,
	filter : null,
	sort : null,
	choiceDay : null,

	listData : computed(function() {}),

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
					'rgba(254,204,88,1)',
					'rgba(254,99,131,1)',
					'rgba(254,158,66,1)'
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

	actions : {
		firstPage() {
			this.set("page", 1);
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		nextPage() {
			var listData = this.get("listData");
			if (listData.current_page == listData.last_page) return;
			this.set("page", parseInt(this.page) + 1);
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		previousPage() {
			var listData = this.get("listData");
			if (listData.current_page == 1) return;
			this.set("page", parseInt(this.page) - 1);
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		lastPage() {
			var listData = this.get("listData");
			this.set("page", listData.last_page);
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		onSelectDay(value) {
			this.filter.duration = value;
		},
		refresh() {
			this.set("page", 1);
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		onHide() {
			this.transitionToRoute("index");
		},
		onIpClick(param) {
			let ip = param.value;
			this.refreshGraph(ip);
		}
	}

});

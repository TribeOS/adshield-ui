import Controller from '@ember/controller';
import { computed } from "@ember/object";


export default Controller.extend({

	listModelName : "",
	graphModelName : "",

	page : 1,
	limit : 10,
	filter : null,
	sort : null,
	choiceDay : null,

	listData : computed(function() {}),
	chartData : computed(function() {}),

	ipSelected : false,
	no_ip_selected_message : "Select an IP to view...",


	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "0", status : 0, ip : "" };
		this.sort = { by : "last_updated", dir : "asc" };
	},

	refreshList : function(page, limit, filter, sort) {
		let self = this;
		self.get('store').queryRecord(this.listModelName, { page : page, limit : limit, filter : filter, sort : sort }).then(function(data) {
			self.set("model", data);
			self.set("listData", self.get("model").get("listData"));
			var listData = data.get("listData");
			listData.headers = ['IP', '# of Violations'];
			listData.data.forEach((item) => {
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
		});
	},


	refreshGraph : function(ip) {
		let self = this;
		this.filter.ip = ip;
		self.get('store').queryRecord(this.graphModelName, { filter : this.filter }).then(function(data) {
			let graphData = data.get("graphData");
			let chartData = {};
			chartData.datasets = [];
			chartData.labels = graphData.label;
			chartData.datasets.push({
				data : graphData.data,
				backgroundColor : [
					//we can add more colors here in order to accommodate more data columns
					'rgba(254,204,88,1)',
					'rgba(254,99,131,1)',
					'rgb(255, 159, 64)'
				],
			});
			self.set("chartData", chartData);
			self.set("violatorInfo", graphData.info);
		});
	},


	chartOptions : computed(function() {
		var options = {
			legend:{
				display : true,
				position : "right"
			},
			tooltips : {
				enabled : true
			},
		}
		return options;
	}),

	/**
	 * used for creating charts and graphs
	 * will adjust datasets automatically depending if data passed has existing datasets already
	 * @param  {[type]} graphData [description]
	 * @return {[type]}           [description]
	 */
	generateChartData : function(graphData) {
		let chartData = {};
		chartData.datasets = [];
		chartData.labels = graphData.label;
		if (typeof graphData.datasets == 'undefined') {
			//no datasets yet, we assume we are having one dataset only
			//mainly used for single line/bar or pie charts
			chartData.datasets.push({
				data : graphData.data,
				backgroundColor : [
					//we can add more colors here in order to accommodate more data columns
					'rgba(254,204,88,1)',
					'rgba(254,99,131,1)',
					'rgb(255, 159, 64)'
				],
			});
		} else {
			let colors = [
				//we can add more colors here in order to accommodate more data columns
				'rgba(254,204,88,1)',
				'rgba(254,99,131,1)',
				'rgb(255, 159, 64)'
			];
			//we have predefined datasets from server, assuming we have multiple datasets
			//mostly used for bar/line graphs
			graphData.datasets.forEach(function(item, index) {
				chartData.datasets.push({
					label : item.label,
					data : item.data,
					fill : false,
					borderColor : colors[index],
					backgroundColor : colors[index],
				});
			});
		}
		return chartData;
	},

	/**
	 * for handling custom chart data
	 * function would be implemented on the child class
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	customChartData : function() {},


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
			this.set("ipSelected", true);
			let ip = param.value;
			this.refreshGraph(ip);
		}
	}

});

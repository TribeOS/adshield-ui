import Controller from '@ember/controller';
import { computed } from "@ember/object";


export default Controller.extend({

	session : Ember.inject.service('session'),

	listModelName : "",
	graphModelName : "",

	page : 1,
	limit : 10,
	filter : null,
	sort : null,
	choiceDay : null,

	listData : [],
	chartData : computed(function() {}),

	ipSelected : false,
	no_ip_selected_message : "Select an IP to view...",

	userWebsites : [],


	/**
	 * for dropdown choices on forms
	 * @param  {[type]} )             {		return    [			{    value         : 'block', label : 'Block'} [description]
	 * @param  {[type]} options.value :             'captcha' [description]
	 * @param  {[type]} options.label :             'Captcha' [description]
	 * @param  {[type]} ];	}         [description]
	 * @return {[type]}               [description]
	 */
	choicesBlock : computed(function() {
		return [
			{ value : 'block', label : 'Block'},
			{ value : 'captcha', label : 'Captcha'},
		];
	}),

	/**
	 * for dropdown choices on yes/no questions
	 * @param  {[type]} )             {		return    [			{ value         :             "1", label : 'Yes' } [description]
	 * @param  {[type]} options.value :             "0"    [description]
	 * @param  {[type]} options.label :             'No'   }		];        [description]
	 * @return {[type]}               [description]
	 */
	choicesBoolean : computed(function() {
		return [
			{ value : "1", label : 'Yes' },
			{ value : "0", label : 'No' }
		];
	}),


	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "0", status : "0", ip : "", dateFrom : "", dateTo : "" };
		this.sort = { by : "last_updated", dir : "asc" };

		if (!this.get("session").isAuthenticated) this.transitionToRoute("home");
	},

	refreshList : function(page, limit, filter, sort) {
		let self = this;
		let arg = { page : page, limit : limit, filter : filter, sort : sort };
		self.get('store').queryRecord(this.get("listModelName"), arg).then(function(data) {
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
			self.set("listData", listData);
		}).catch(function(error) {
			self.get("session").invalidate().then(() => {
				self.transitionToRoute("home");
			});
		});
	},


	refreshGraph : function(ip) {
		let self = this;
		this.set("filter.ip", ip);
		self.get('store').queryRecord(this.graphModelName, { filter : this.get("filter") }).then(function(data) {
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
		this.filter.ip = "";
	},


	chartOptions : computed(function() {
		var options = {
			legend:{
				display : true,
				position : "right",
				fullWidth : false,
				labels : {
					boxWidth: 20,
				}
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
				label : graphData.label,
				data : graphData.data,
				backgroundColor : [
					//we can add more colors here in order to accommodate more data columns
					'rgba(254,204,88,1)',
					'rgba(254,99,131,1)',
					'rgb(255, 159, 64)',
					'rgb(66, 212, 244)',
					'rgb(126, 34, 247)',
					'rgb(136, 221, 8)',
					'rgb(49, 214, 161)',
				],
			});
		} else {
			let colors = [
				//we can add more colors here in order to accommodate more data columns
				'rgba(254,204,88,1)',
				'rgba(254,99,131,1)',
				'rgb(255, 159, 64)',
				'rgb(66, 212, 244)',
				'rgb(126, 34, 247)',
				'rgb(136, 221, 8)',
				'rgb(49, 214, 161)',
			];
			//we have predefined datasets from server, assuming we have multiple datasets
			//mostly used for bar/line graphs with multiple datasets
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

		let maxString = 25;
		chartData.labels.forEach(function(item, index) {
			if (item.length > maxString) chartData.labels[index] = item.substring(0, maxString) + "...";
		});
		return chartData;
	},

	/**
	 * for handling custom chart data
	 * function would be implemented on the child class
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	customChartData : function() {},


	/**
	 * fetch websites belonging to the current logged in account/user
	 * @return {[type]} [description]
	 */
	fetchMySites : function(onFetchDone) {
    	var self = this;
        self.get('store').query("userWebsite", { filter : {} }).then(function(data) {
			self.set("userWebsites", data);
			if (typeof onFetchDone !== "undefined") onFetchDone();
		});
    },

	actions : {
		firstPage() {
			if (this.get("page") == 1) return;
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
			if (this.get("page") == listData.last_page) return;
			this.set("page", listData.last_page);
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		onSelectDay(value) {
			this.filter.duration = value;
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		fetchData() {
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		refresh() {
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		onHide() {
			this.transitionToRoute("index");
		},
		onFromDateChanged(dates, selectedDate, flatpickr) {
			this.set("filter.dateFrom", selectedDate);
		},
		onToDateChanged(dates, selectedDate, flatpickr) {
			this.set("filter.dateTo", selectedDate);
		},
		onIpClick(param) {
			this.set("ipSelected", true);
			let ip = param.value;
			this.refreshGraph(ip);
		},
		onSelectSite(item) {
        	this.filter.userKey = item;
        }
	}

});

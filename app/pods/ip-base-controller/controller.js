import Controller from '@ember/controller';
import { computed } from "@ember/object";


export default Controller.extend({

	ajax: Ember.inject.service(),
	
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

	// list of websites the current account have
	userWebsites : [],

	// flag to indicate if the system is busy processing something
	isBusy : false,
	busyNotification : null,


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
		this.filter.ip = "";
		let arg = { page : page, limit : limit, filter : filter, sort : sort };
		self.get('store').queryRecord(this.get("listModelName"), arg).then(function(data) {
			var listData = data.get("listData");
			listData.headers = ['IP', '# of Violations'];
			// listData.data.forEach((item) => {
			// 	//use this code to turn a column value on the table into a link.
			// 	let old = item.ip;
			// 	item.ip = { 
			// 		type : 'action', route : "", 
			// 		params : [
			// 			"", //route name
			// 			{
			// 				isQueryParams : true,
			// 				values : {
			// 					ip : old //route param:values
			// 				}
			// 			}
			// 		],
			// 		value : old
			// 	}
			// });
			self.set("listData", listData);
		}).catch(function(error) {
			self.get("session").invalidate().then(() => {
				self.transitionToRoute("home");
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
			this.filter.ip = "";
		});
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
	 * indicate if system is busy or not
	 * @param  {[type]} b [description]
	 * @return {[type]}   [description]
	 */
	busy : function(b) {
		this.set("isBusy", b);
	},

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

    /**
     * shorthand for showing notifications
     * @param  {[type]} type    [description]
     * @param  {[type]} message [description]
     * @param {boolean} dontWait set a value to disable auto clear.
     * @return {[type]}         [description]
     */
    showAlert : function(type, message, dontWait) {
    	let arg = {};
    	if (typeof dontWait == 'undefined') arg = { autoClear : true };
    	arg.htmlContent = true;
    	switch(type) {
    		case "info" : return this.get("notifications").info(message, arg); break;
    		case "success" : return this.get("notifications").success(message, arg); break;
    		case "error" : return this.get("notifications").error(message, arg); break;
    		case "warning" : return this.get("notifications").warning(message, arg); break;
    	}
    },

    showBusy : function(message) {
    	this.hideBusy();
    	this.busyNotification = this.showAlert("info", message, 1);
    },

    hideBusy : function() {
    	this.get("notifications").removeNotification(this.busyNotification);
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
		onIpClick(ip) {
			this.set("ipSelected", true);
			this.refreshGraph(ip);
		},
		onSelectSite(item) {
        	this.filter.userKey = item;
        },
        gotoPage(page) {
        	this.page = page;
        	this.refreshList(this.page, this.limit, this.filter, this.sort);
        }
	}

});

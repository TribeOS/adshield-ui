import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({


	chartData : computed(function() {}),

	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "0", status : 0, ip : "" };
		this.sort = { by : "last_updated", dir : "asc" };
	},


	refreshList : function(page, limit, filter, sort) {
		var self = this;
		self.get('store').queryRecord("desirableAutomatedTraffic", { page : page, limit : limit, filter : filter, sort : sort }).then(function(data) {
			let pageData = data.get("pageData");
			let chartData = {};
			chartData.desirableAutomatedRequests = self.generateChartData(pageData.desirableAutomatedRequests);
			self.set("chartData", chartData);

			let listData = pageData.listData;
			self.set("listData", listData);
		});
	},


	graphOption : computed(function() {
		var options = {
			legend:{
				display : false,
				position : "right"
			},
			tooltips : {
				enabled : true
			},
			scales : {
				yAxes : [{
					ticks : {
						min : 0,
					},
				}]
			},
		}
		return options;
	}),


	actions : {

		onSelectDay(value) {
			this.filter.duration = value;
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		refresh() {
			let self = this;
            this.set("page", 1);
            this.fetchMySites(function(data) {
            	self.filter.userKey = self.userWebsites.objectAt(0).get("userKey");
            	self.refreshList(self.page, self.limit, self.filter, self.sort);
            });
		},
		onHide() {
			this.transitionToRoute("index");
		},

		fetchData() {
			let self = this;
        	self.refreshList(self.page, self.limit, self.filter, self.sort);
		},
		onSelectSite(item) {
        	let self = this;
        	this.set("page", 1);
        	self.filter.userKey = item;
        	self.refreshList(self.page, self.limit, self.filter, self.sort);
        },
        gotoPage(page) {
			this.page = page;
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
	},

});

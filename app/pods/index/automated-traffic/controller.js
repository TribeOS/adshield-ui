import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({

	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "0", status : 0, ip : "" };
		this.sort = { by : "last_updated", dir : "asc" };
	},

	getData : function(page, limit, filter, sort) {
		let self = this;
		self.get('store').queryRecord("automatedTraffic", { page : page, limit : limit, sort : sort, filter : this.filter }).then(function(data) {
			let mainData = data.get("pageData");
			var listData = mainData.automatedTrafficList;
			listData.headers = ['Undesired Automated Traffic Name', 'Classification', 'Page Requests'];
			listData.data.forEach(function(item) {
				let old = item.name;
				item.name = {
					textLeft : true,
					value : old
				}
			});
			self.set("listData", listData);

			let chartData = {};
			chartData.botsByClassification = self.generateChartData(mainData.botsByClassification);
			chartData.mostFrequentBots = self.generateChartData(mainData.mostFrequentBots);
			self.set("chartData", chartData);
		});
	},


	actions : {
		firstPage() {
			this.set("page", 1);
			this.getData(this.page, this.limit, this.filter, this.sort);
		},
		nextPage() {
			var listData = this.get("listData");
			if (listData.current_page == listData.last_page) return;
			this.set("page", parseInt(this.page) + 1);
			this.getData(this.page, this.limit, this.filter, this.sort);
		},
		previousPage() {
			var listData = this.get("listData");
			if (listData.current_page == 1) return;
			this.set("page", parseInt(this.page) - 1);
			this.getData(this.page, this.limit, this.filter, this.sort);
		},
		lastPage() {
			var listData = this.get("listData");
			this.set("page", listData.last_page);
			this.getData(this.page, this.limit, this.filter, this.sort);
		},
		onSelectDay(value) {
			this.filter.duration = value;
			this.getData();
		},
		refresh() {
			let self = this;
            this.fetchMySites(function(data) {
            	self.filter.userKey = self.userWebsites.objectAt(0).get("userKey");
            	self.getData();
            });
		},
		onHide() {
			this.transitionToRoute("index");
		},

		fetchData() {
			this.getData(this.page, this.limit, this.filter, this.sort);
		},
		onSelectSite(item) {
        	let self = this;
        	self.filter.userKey = item;
        	self.getData(self.page, self.limit, self.filter, self.sort);
        }, 
	}

});

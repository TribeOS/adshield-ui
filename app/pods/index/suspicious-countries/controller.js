import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({

	pageData : [],
	showTable : false,

	loading : false,

	//initial position to display
	lat : 0,
  	lng: -9,
	zoom : 2,

	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "7", status : 0, ip : "" };
		this.sort = { by : "last_updated", dir : "asc" };
	},

	refreshList : function(page, limit, filter, sort) {
		this.showBusy('Fetching data ...');
		this.set("loading", true);
		let self = this;
		this.get('store').queryRecord("suspiciousCountry", { page : page, limit : limit, filter : filter, sort : sort, showTable : this.showTable }).then(function(data) {
			if (self.showTable)
			{
				self.set("listData", data.get("listData"));
			}
			else
			{
				let pageData = data.get("pageData");
				let storedIps = [];
				//parse gps coord
				pageData.forEach(function(item) {
					let exists = false;
					let info = JSON.parse(item.rawInfo);

					//skip same locations
					// for(var i in storedIps)
					// {
					// 	if(storedIps[i].lat == info.lat && storedIps[i].lon == info.lon) exists = true;
					// }
					if (!exists && typeof info.lat !== "undefined")
					{
						item.location = [];
						item.location.push(info.lat);
						item.location.push(info.lon);
						item.city = info.city;
						// storedIps.push({ lat : info.lat, lon : info.lon });
					}
				});
				self.set("pageData", pageData);
				self.hideBusy();
			}
			self.set("loading", false);
		});
	},

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
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		refresh() {
			let self = this;
            this.fetchMySites(function(data) {
            	self.filter.userKey = self.userWebsites[0].userKey;
				self.refreshList(self.page, self.limit, self.filter, self.sort);
            });
		},
		onHide() {
			this.transitionToRoute("index");
		},
		toggleView() {
			let showTable = this.get("showTable");
			this.set("showTable", !showTable);
			this.set("page", 1);
			this.refreshList(this.page, this.limit, this.filter, this.sort);
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
			//go to a specific page
			this.page = page;
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		}
	}

});

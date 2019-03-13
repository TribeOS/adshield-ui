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
				var c = 0;
				//parse gps coord
				pageData.forEach(function(item) {
					let exists = false;
					let info = JSON.parse(item.rawInfo);
					item.noRequests = parseInt(item.noRequests);

					let tmpLoc = { lat : 0, lon : 0 };
					item.location = [];
					if (typeof info.lat !== "undefined") {
						tmpLoc.lat = parseFloat(info.lat);
					} else {
						tmpLoc.lat = parseFloat(info.latitude);
					}
					if (typeof info.lon !== "undefined") {
						tmpLoc.lon = parseFloat(info.lon);
					} else {
						tmpLoc.lon = parseFloat(info.longitude);
					}
					
					//skip same locations. just add their total no of requests
					for(var i = 0; i < storedIps.length; i ++) {
						if(storedIps[i].lat == tmpLoc.lat && storedIps[i].lon == tmpLoc.lon) {
							storedIps[i].item.noRequests += item.noRequests;
							exists = true;
							break;
						}
					}
					
					if (!exists) {
						item.location.push(tmpLoc.lat);
						item.location.push(tmpLoc.lon);
						item.city = info.city;
						storedIps.push({ lat : tmpLoc.lat, lon : tmpLoc.lon, item : item });
					}
					
				});
				self.set("pageData", pageData);
			}
			self.hideBusy();
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

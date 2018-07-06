import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({

	showTable : false,

	lat : 45.519743,
  	lng: -122.680522,
	zoom : 2,

	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "0", status : 0, ip : "" };
		this.sort = { by : "last_updated", dir : "asc" };
	},

	refreshList : function(page, limit, filter, sort) {
		let self = this;
		this.get('store').queryRecord("suspiciousCountry", { page : page, limit : limit, filter : filter, sort : sort }).then(function(data) {
			let listData = {};
			listData.data = data.get("pageData");
			listData.headers = ["Country", "Total Requests"];
			listData.data.forEach((item, index) => {
				//use this code to turn a column value on the table into a link.
				let old = item.country;
				item.country = { 
					textLeft : true,
					value : old
				}
			});
			self.set("listData", listData);
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
			this.set("page", 1);
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		onHide() {
			this.transitionToRoute("index");
		},
		toggleView() {
			let showTable = this.get("showTable");
			this.set("showTable", !showTable);
		}
	}

});

import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({

	page : 1,
	limit : 10,
	filter : { dateFrom : "", dateTo : "", userKey : "", status : 0, ip : "" },
	sort : { by : "last_updated", dir : "asc" },

	listData : computed(function() {}),

	init : function() {
		this._super();
		this.refreshList(this.page, this.limit, this.filter, this.sort);
	},

	refreshList : function(page, limit, filter, sort) {
		var self = this;
		self.get('store').queryRecord("ipviolatorslist", { page : page, limit : limit, filter : filter, sort : sort }).then(function(data) {
			self.set("model", data);
			self.set("listData", self.get("model").get("listData"));
			var listData = self.get("listData");
			listData.headers = ['IP', 'Status', 'Last Updated'];
			listData.data.forEach((item, index) => {
				//use this code to turn a column value on the table into a link.
				let old = item.ip;
				item.ip = { 
					type : 'link', route : "ipviolatorgraph", 
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
		refresh() {
			this.set("page", 1);
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		rowClicked(row) {
			console.log(row);
		}
	}

});

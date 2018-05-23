import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({

	page : 0,
	limit : 10,
	filter : null,
	sort : null,
	modalOpen : true,

	//var for list data
	listData : computed(function() {}),

	init : function() {
		this._super();
		this.filter = { dateFrom : "", dateTo : "", userKey : "" };
		this.sort = { by : "date_added", dir : "asc" };
		this.refreshList(this.page, this.limit, this.filter, this.sort);
	},

	/**
	 * fetch data from server for ip access list
	 * @param  {[type]} page   [description]
	 * @param  {[type]} limit  [description]
	 * @param  {[type]} filter [description]
	 * @param  {[type]} sort   [description]
	 * @return {[type]}        [description]
	 */
	refreshList : function(page, limit, filter, sort) {
		var self = this;
		this.set("listData", null);
		self.get('store').queryRecord("ipaccesslist", { page : page, limit : limit, filter : filter, sort : sort }).then(function(data) {
			self.set("model", data);
			self.set("listData", self.get("model").get("listData"));
			var listData = self.get("listData");
			listData.headers = ['IP', 'Recorded on', 'Visited Url'];
		});
	},
	

	actions : {

		//pagination actions
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
		refreshList(filter) {
			this.set("filter", filter);
			this.set("page", 1);
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},

	}

});

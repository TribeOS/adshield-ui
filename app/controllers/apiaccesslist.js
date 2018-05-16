import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({

	page : 0,
	limit : 10,
	filter : { dateFrom : "", dateTo : "", userKey : "" },

	listData : computed(function() {}),

	init : function() {
		this._super();
		this.refreshList(this.page, this.limit, this.filter);
	},

	refreshList : function(page, limit, filter) {
		var self = this;
		self.get('store').queryRecord("ipaccesslist", { page : page, limit : limit, filter : filter }).then(function(data) {
			self.set("model", data);
			self.set("listData", self.get("model").get("listData"));
			var listData = self.get("listData");
			listData.headers = ['IP', 'Recorded on', 'Visited Url'];
		});
	},

	actions : {
		firstPage() {
			this.set("page", 1);
			this.refreshList(this.page, this.limit, this.filter);
		},
		nextPage() {
			var listData = this.get("listData");
			if (listData.current_page == listData.last_page) return;
			this.set("page", parseInt(this.page) + 1);
			this.refreshList(this.page, this.limit, this.filter);
		},
		previousPage() {
			var listData = this.get("listData");
			if (listData.current_page == 1) return;
			this.set("page", parseInt(this.page) - 1);
			this.refreshList(this.page, this.limit, this.filter);
		},
		lastPage() {
			var listData = this.get("listData");
			this.set("page", listData.last_page);
			this.refreshList(this.page, this.limit, this.filter);
		},
		refresh() {
			this.set("page", 1);
			this.refreshList(this.page, this.limit, this.filter);
		}
	}

});

import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({

	listModelName : "suspUserAgent",
	graphModelName : "suspUserAgentGraph",

	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "0", status : 0, ip : "" };
		this.sort = { by : "last_updated", dir : "asc" };
	},


	actions : {
		fetchData() {
			let self = this;
			self.refreshList(self.page, self.limit, self.filter, self.sort);
		},
		refresh() {
			let self = this;
            this.fetchMySites(function(data) {
            	self.filter.userKey = self.userWebsites.objectAt(0).get("userKey");
            	self.refreshList(self.page, self.limit, self.filter, self.sort);
            });
		},
		onSelectDay(value) {
			this.filter.duration = value;
			this.refreshGraph(this.page, this.limit, this.filter, this.sort);
		},
		onSelectSite(item) {
        	let self = this;
        	self.filter.userKey = item;
        	self.refreshList(self.page, self.limit, self.filter, self.sort);
        }, 
	}


});

import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({

	listModelName : "aggregatorUserAgent",
	graphModelName : "aggregatorUserAgentGraph",

	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "7", status : 0, ip : "" };
		this.sort = { by : "last_updated", dir : "asc" };
	},


	actions : {
		refresh() {
			let self = this;
            this.set("page", 1);
            this.fetchMySites(function(data) {
            	self.filter.userKey = self.userWebsites[0].userKey;
            	self.refreshList(self.page, self.limit, self.filter, self.sort);
            });
        },
        onSelectSite(item) {
        	let self = this;
        	this.set("page", 1);
        	self.filter.userKey = item;
        	self.refreshList(self.page, self.limit, self.filter, self.sort);
        }
	}

});

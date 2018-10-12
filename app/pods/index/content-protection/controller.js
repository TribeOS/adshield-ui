import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({


	record : null,
	settings : computed(function() {}),

	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "0", status : 0, ip : "" };
		this.sort = { by : "last_updated", dir : "asc" };
	},


	fetchData : function() {
		var self = this;
		self.get('store').queryRecord("contentProtection", self.filter).then(function(data) {
			self.set("record", data);
			let pageData = data.get("pageData");
			self.set("settings", pageData);
		});
	},
	

	saveData : function() {
		let record = this.get("record");
		let settings = this.get("settings");
		settings.userKey = this.filter.userKey;
		record.set("pageData", settings);
		record.save().then(function(response) {
			alert("Settings saved.");
		}).catch(function(error) {
			alert("Error : " + error);
		});
	},

	actions : {
		refresh() {
			this.set("page", 1);
			let self = this;
			this.fetchMySites(function() {
				self.filter.userKey = self.userWebsites.objectAt(0).get("userKey");
				self.fetchData();
			});
		},
		onHide() {
			this.transitionToRoute("index");
		},
		onSelect(selected) {
		},
		onSave() {
			this.saveData();
		},
		onSelectSite(item) {
        	this.filter.userKey = item;
        	this.fetchData();
        },		
	},

});

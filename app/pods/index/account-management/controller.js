import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({


	record : null,
	settings : computed(function() {}),

	isEditAccount : false,

	choicesBoolean : computed(function() {
		return [
			{ value : 'yes', label : 'Yes' },
			{ value : 'no', label : 'No' }
		];
	}),



	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "0", status : 0, ip : "" };
		this.sort = { by : "last_updated", dir : "asc" };
	},


	fetchData : function() {
		var self = this;
		self.get('store').queryRecord("accountManagement", {}).then(function(data) {
			self.set("record", data);
			let pageData = data.get("pageData");
			self.set("settings", pageData);
		});
	},


	getAccessString : function(level) {
		switch(level) {
			case 1 : return "account access"; break;
			case 2 : return "report access"; break;
			case 3 : return "settings access"; break;
			default: "n/a";
		}

	},
	

	saveData : function() {
		let record = this.get("record");
		let settings = this.get("settings");
		record.set("pageData", settings);
		record.save();
	},

	actions : {
		refresh() {
			this.set("page", 1);
			this.fetchData();
		},
		onHide() {
			this.transitionToRoute("index");
		},
		onSelect(selected) {
		},
		onSave() {
			this.saveData();
		},
		editAccount() {
			this.toggleProperty("isEditAccount");
		},
		doneEditAccount() {
			this.set("isEditAccount", false);
		}
		
	},

});

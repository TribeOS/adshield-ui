import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";
import EmberObject from '@ember/object';


export default IpBaseController.extend({

	settings : computed(function() {}),

	isEditAccount : false,

	record : null,
	EmailNotification : EmberObject.extend({
		email : "", coverage : ""
	}),
	newEmailNotificationEmail : "",
	newEmailNotificationCoverage : "all",
	users : [],

	choicesBoolean : computed(function() {
		return [
			{ value : 'yes', label : 'Yes' },
			{ value : 'no', label : 'No' }
		];
	}),

	choicesCoverage : computed(function() {
		return [
			{ value : 'all', label : 'All Events' },
			{ value : 'settings', label : 'Settings' },
			{ value : 'violations', label : 'Violations' },
		];
	}),



	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "0", status : 0, ip : "" };
		this.sort = { by : "last_updated", dir : "asc" };
	},


	fetchData : function() {
		var self = this;
		//get page data (account info)
		self.get('store').queryRecord("accountManagement", {}).then(function(data) {
			self.set("record", data);
			let pageData = data.get("pageData");
			self.set("settings", pageData);
		});

		//get users under this account
		self.get('store').query("user", {}).then(function(data) {
			self.set("users", data);
		});
	},

	saveData : function() {
		let self = this;
		let record = this.get("record");
		let settings = this.get("settings");
		record.set("pageData", settings);
		record.save().then(function() {
			self.showAlert("success", "Settings saved.");
		});
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
		},


		removeEmailNotification(emailNotification) {
			let settings = this.get("settings");
			settings.emailNotifications.removeObject(emailNotification);
			this.set("settings", settings);
		},
		addEmailNotification(email, coverage) {
			if (email.trim().length == 0) return false;

			let settings = this.get("settings");
			let obj = this.EmailNotification.create({
				email : email,
				coverage : coverage
			});
			settings.emailNotifications.addObject(obj)
			this.set("newEmailNotificationCoverage", "");
			this.set("newEmailNotificationEmail", "");
		},
		onEmailCoverageSelect(selection) {
			this.set("newEmailNotificationCoverage", selection);
		},

		editUser(user) {
			this.transitionToRoute('index.user', { queryParams : { id : user.id }});
		},

		newUser(user) {
			this.transitionToRoute('index.user', { queryParams : { id : "0" }});
		}


	},

});

import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";
import EmberObject from '@ember/object';


export default IpBaseController.extend({

	queryParams : ['id'],
	settings : computed(function() {}),

	isEditAccount : false,

	record : null,
	user : {},
	id : 0,

	choicesPermissions : computed(function() {
		return [
			{ value : '1', label : 'Account Access' },
			{ value : '2', label : 'Reports Access' },
			{ value : '3', label : 'Settings Access' }
		];
	}),

	init : function() {
		this._super(...arguments);
		this.filter = { userId : this.id };
	},


	fetchData : function() {
		var self = this;
		self.get('store').queryRecord("user", { filter : self.filter }).then(function(data) {
			self.set("user", data);
		});
	},

	saveData : function() {
		user.save().then(function(response) {
			console.log(response);
		});
	},

	actions : {
		refresh() {
			if (this.get("id") == 0) return;
			this.fetchData();
		},
		onHide() {
			this.transitionToRoute("index.account-management");
		},
		onSelect(selected) {
		},
		onSave() {
			this.saveData();
			this.transitionToRoute("index.account-management");
		},
		editAccount() {
			this.toggleProperty("isEditAccount");
		},
		doneEditAccount() {
			this.set("isEditAccount", false);
		},

		onSelectPermission(selected) {
			console.log(selected);
			this.user.permission = selected.value;
		},

	},

});

import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";
import EmberObject from '@ember/object';


export default IpBaseController.extend({

	queryParams : ['id'],
	settings : computed(function() {}),

	isNewUser : computed(function() {
		return this.id == 0;
	}),

	record : null,
	user : {},
	id : 0,

	choicesPermissions : computed(function() {
		return [
			{ value : 1, label : 'Account Access' },
			{ value : 2, label : 'Reports Access' },
			{ value : 3, label : 'Settings Access' }
		];
	}),

	init : function() {
		this._super(...arguments);
	},


	fetchData : function(id) {
		var self = this;
		self.get('store').queryRecord("user", { id : id }).then(function(data) {
			self.set("user", data);
		});
	},

	saveData : function() {
		this.user.save().then(function(response) {
			console.log(response);
		});
	},

	actions : {
		refresh() {
			if (this.get("id") == 0) {
				let record = this.get('store').createRecord('user', {
					firstname : '', lastname : '', email : '', username : '', permission : 1, password : ""
				});
				this.set("user", record);
				return;
			}
			this.fetchData(this.get("id"));
		},
		onHide() {
			this.transitionToRoute("index.account-management");
		},
		onSelect(selected) {
		},
		onSave() {
			this.saveData();
			// this.transitionToRoute("index.account-management");
		},
		onSelectPermission(selected) {
			// let user = this.get("user");
			// user.set("permission", selected);
			// this.set("user", user);
			this.user.set("permission", selected);
		},


		onChangePassword() {
			//change password
		}

	},

});

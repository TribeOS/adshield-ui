import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";
import EmberObject from '@ember/object';


export default IpBaseController.extend({

	queryParams : ['id'],
	settings : computed(function() {}),

	record : null,
	user : {},
	password : "",
	password_confirmation : "",
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
		let self = this;
		this.user.set("isReset", false);
		this.user.set("password", null);
		this.user.set("password_confirmation", null);
		this.user.save().then(function() {
			alert("User information updated");
			self.transitionToRoute("index.account-management");
		}).catch(function(error) {
			alert(error.errors[0].detail);
		});
	},

	resetPassword : function() {
		let self = this;
		this.user.set("isReset", true);
		this.user.set("password", this.get("password"));
		this.user.set("password_confirmation", this.get("password_confirmation"));
		this.user.save().then(function() {
			alert("Password has been reset!");
		}).catch(function(error) {
			alert(error.errors[0].detail);
		});
		this.set("password", "");
		this.set("password_confirmation", "");
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
		},
		onSelectPermission(selected) {
			// let user = this.get("user");
			// user.set("permission", selected);
			// this.set("user", user);
			this.user.set("permission", selected);
		},


		onChangePassword() {
			this.resetPassword();
		}

	},

});

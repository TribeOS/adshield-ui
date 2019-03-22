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

	timezones : [
	  {
	    "offset": "GMT-12:00",
	    "name": "Etc/GMT-12"
	  },
	  {
	    "offset": "GMT-11:00",
	    "name": "Etc/GMT-11"
	  },
	  {
	    "offset": "GMT-11:00",
	    "name": "Pacific/Midway"
	  },
	  {
	    "offset": "GMT-10:00",
	    "name": "America/Adak"
	  },
	  {
	    "offset": "GMT-09:00",
	    "name": "America/Anchorage"
	  },
	  {
	    "offset": "GMT-09:00",
	    "name": "Pacific/Gambier"
	  },
	  {
	    "offset": "GMT-08:00",
	    "name": "America/Dawson_Creek"
	  },
	  {
	    "offset": "GMT-08:00",
	    "name": "America/Ensenada"
	  },
	  {
	    "offset": "GMT-08:00",
	    "name": "America/Los_Angeles"
	  },
	  {
	    "offset": "GMT-07:00",
	    "name": "America/Chihuahua"
	  },
	  {
	    "offset": "GMT-07:00",
	    "name": "America/Denver"
	  },
	  {
	    "offset": "GMT-06:00",
	    "name": "America/Belize"
	  },
	  {
	    "offset": "GMT-06:00",
	    "name": "America/Cancun"
	  },
	  {
	    "offset": "GMT-06:00",
	    "name": "America/Chicago"
	  },
	  {
	    "offset": "GMT-06:00",
	    "name": "Chile/EasterIsland"
	  },
	  {
	    "offset": "GMT-05:00",
	    "name": "America/Bogota"
	  },
	  {
	    "offset": "GMT-05:00",
	    "name": "America/Havana"
	  },
	  {
	    "offset": "GMT-05:00",
	    "name": "America/New_York"
	  },
	  {
	    "offset": "GMT-04:30",
	    "name": "America/Caracas"
	  },
	  {
	    "offset": "GMT-04:00",
	    "name": "America/Campo_Grande"
	  },
	  {
	    "offset": "GMT-04:00",
	    "name": "America/Glace_Bay"
	  },
	  {
	    "offset": "GMT-04:00",
	    "name": "America/Goose_Bay"
	  },
	  {
	    "offset": "GMT-04:00",
	    "name": "America/Santiago"
	  },
	  {
	    "offset": "GMT-04:00",
	    "name": "America/La_Paz"
	  },
	  {
	    "offset": "GMT-03:00",
	    "name": "America/Argentina/Buenos_Aires"
	  },
	  {
	    "offset": "GMT-03:00",
	    "name": "America/Montevideo"
	  },
	  {
	    "offset": "GMT-03:00",
	    "name": "America/Araguaina"
	  },
	  {
	    "offset": "GMT-03:00",
	    "name": "America/Godthab"
	  },
	  {
	    "offset": "GMT-03:00",
	    "name": "America/Miquelon"
	  },
	  {
	    "offset": "GMT-03:00",
	    "name": "America/Sao_Paulo"
	  },
	  {
	    "offset": "GMT-03:30",
	    "name": "America/St_Johns"
	  },
	  {
	    "offset": "GMT-02:00",
	    "name": "America/Noronha"
	  },
	  {
	    "offset": "GMT-01:00",
	    "name": "Atlantic/Cape_Verde"
	  },
	  {
	    "offset": "GMT",
	    "name": "Europe/Belfast"
	  },
	  {
	    "offset": "GMT",
	    "name": "Africa/Abidjan"
	  },
	  {
	    "offset": "GMT",
	    "name": "Europe/Dublin"
	  },
	  {
	    "offset": "GMT",
	    "name": "Europe/Lisbon"
	  },
	  {
	    "offset": "GMT",
	    "name": "Europe/London"
	  },
	  {
	    "offset": "UTC",
	    "name": "UTC"
	  },
	  {
	    "offset": "GMT+01:00",
	    "name": "Africa/Algiers"
	  },
	  {
	    "offset": "GMT+01:00",
	    "name": "Africa/Windhoek"
	  },
	  {
	    "offset": "GMT+01:00",
	    "name": "Atlantic/Azores"
	  },
	  {
	    "offset": "GMT+01:00",
	    "name": "Atlantic/Stanley"
	  },
	  {
	    "offset": "GMT+01:00",
	    "name": "Europe/Amsterdam"
	  },
	  {
	    "offset": "GMT+01:00",
	    "name": "Europe/Belgrade"
	  },
	  {
	    "offset": "GMT+01:00",
	    "name": "Europe/Brussels"
	  },
	  {
	    "offset": "GMT+02:00",
	    "name": "Africa/Cairo"
	  },
	  {
	    "offset": "GMT+02:00",
	    "name": "Africa/Blantyre"
	  },
	  {
	    "offset": "GMT+02:00",
	    "name": "Asia/Beirut"
	  },
	  {
	    "offset": "GMT+02:00",
	    "name": "Asia/Damascus"
	  },
	  {
	    "offset": "GMT+02:00",
	    "name": "Asia/Gaza"
	  },
	  {
	    "offset": "GMT+02:00",
	    "name": "Asia/Jerusalem"
	  },
	  {
	    "offset": "GMT+03:00",
	    "name": "Africa/Addis_Ababa"
	  },
	  {
	    "offset": "GMT+03:00",
	    "name": "Asia/Riyadh89"
	  },
	  {
	    "offset": "GMT+03:00",
	    "name": "Europe/Minsk"
	  },
	  {
	    "offset": "GMT+03:30",
	    "name": "Asia/Tehran"
	  },
	  {
	    "offset": "GMT+04:00",
	    "name": "Asia/Dubai"
	  },
	  {
	    "offset": "GMT+04:00",
	    "name": "Asia/Yerevan"
	  },
	  {
	    "offset": "GMT+04:00",
	    "name": "Europe/Moscow"
	  },
	  {
	    "offset": "GMT+04:30",
	    "name": "Asia/Kabul"
	  },
	  {
	    "offset": "GMT+05:00",
	    "name": "Asia/Tashkent"
	  },
	  {
	    "offset": "GMT+05:30",
	    "name": "Asia/Kolkata"
	  },
	  {
	    "offset": "GMT+05:45",
	    "name": "Asia/Katmandu"
	  },
	  {
	    "offset": "GMT+06:00",
	    "name": "Asia/Dhaka"
	  },
	  {
	    "offset": "GMT+06:00",
	    "name": "Asia/Yekaterinburg"
	  },
	  {
	    "offset": "GMT+06:30",
	    "name": "Asia/Rangoon"
	  },
	  {
	    "offset": "GMT+07:00",
	    "name": "Asia/Bangkok"
	  },
	  {
	    "offset": "GMT+07:00",
	    "name": "Asia/Novosibirsk"
	  },
	  {
	    "offset": "GMT+08:00",
	    "name": "Etc/GMT+8"
	  },
	  {
	    "offset": "GMT+08:00",
	    "name": "Asia/Hong_Kong"
	  },
	  {
	    "offset": "GMT+08:00",
	    "name": "Asia/Krasnoyarsk"
	  },
	  {
	    "offset": "GMT+08:00",
	    "name": "Australia/Perth"
	  },
	  {
	    "offset": "GMT+08:45",
	    "name": "Australia/Eucla"
	  },
	  {
	    "offset": "GMT+09:00",
	    "name": "Asia/Irkutsk"
	  },
	  {
	    "offset": "GMT+09:00",
	    "name": "Asia/Seoul"
	  },
	  {
	    "offset": "GMT+09:00",
	    "name": "Asia/Tokyo"
	  },
	  {
	    "offset": "GMT+09:30",
	    "name": "Australia/Adelaide"
	  },
	  {
	    "offset": "GMT+09:30",
	    "name": "Australia/Darwin"
	  },
	  {
	    "offset": "GMT+09:30",
	    "name": "Pacific/Marquesas"
	  },
	  {
	    "offset": "GMT+10:00",
	    "name": "Etc/GMT+10"
	  },
	  {
	    "offset": "GMT+10:00",
	    "name": "Australia/Brisbane"
	  },
	  {
	    "offset": "GMT+10:00",
	    "name": "Australia/Hobart"
	  },
	  {
	    "offset": "GMT+10:00",
	    "name": "Asia/Yakutsk"
	  },
	  {
	    "offset": "GMT+10:30",
	    "name": "Australia/Lord_Howe"
	  },
	  {
	    "offset": "GMT+11:00",
	    "name": "Asia/Vladivostok"
	  },
	  {
	    "offset": "GMT+11:30",
	    "name": "Pacific/Norfolk"
	  },
	  {
	    "offset": "GMT+12:00",
	    "name": "Etc/GMT+12"
	  },
	  {
	    "offset": "GMT+12:00",
	    "name": "Asia/Anadyr"
	  },
	  {
	    "offset": "GMT+12:00",
	    "name": "Asia/Magadan"
	  },
	  {
	    "offset": "GMT+12:00",
	    "name": "Pacific/Auckland"
	  },
	  {
	    "offset": "GMT+12:45",
	    "name": "Pacific/Chatham"
	  },
	  {
	    "offset": "GMT+13:00",
	    "name": "Pacific/Tongatapu"
	  },
	  {
	    "offset": "GMT+14:00",
	    "name": "Pacific/Kiritimati"
	  }
	],

	choicesPermissions : computed(function() {
		return [
			{ value : 1, label : 'Account Access' },
			{ value : 2, label : 'Reports Access' },
			{ value : 3, label : 'Settings Access' },
			{ value : 4, label : 'Admin' }
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
			self.showAlert("success", "User information updated");
			self.transitionToRoute("index.account-management");
		}).catch(function(error) {
			self.showAlert("error", error.errors[0].detail);
		});
	},

	resetPassword : function() {
		let self = this;
		this.user.set("isReset", true);
		this.user.set("password", this.get("password"));
		this.user.set("password_confirmation", this.get("password_confirmation"));
		this.user.save().then(function() {
			self.showAlert("success", "Password has been reset!");
		}).catch(function(error) {
			self.showAlert("error", error.errors[0].detail);
		});
		this.set("password", "");
		this.set("password_confirmation", "");
	},

	actions : {
		refresh() {
			if (this.get("id") == 0) {
				let record = this.get('store').createRecord('user', {
					firstname : '', lastname : '', email : '', username : '', permission : 1, password : "", timeZone : "UTC"
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
		},

		onSelectTimezone(selected) {
			this.user.set("timeZone", selected);
		}

	},

});

import Controller from '@ember/controller';
import { computed } from "@ember/object";
import { inject as service } from '@ember/service';

export default Controller.extend({

	ajax : Ember.inject.service('ajax'),

	queryParams : ['reset'],

	reset : null,
	newPassword : "",
	confirmPassword : "",

	init : function() {
		this._super(...arguments);
	},


	actions : {

		submitReset() {
			var self = this;
		    var notif = self.get("notifications").info("Requesting password reset...");
		    this.get('ajax').post('/resetPassword/' + this.get("reset"), {
		        data: {
		          password : self.get("newPassword"),
		          password_confirmation : self.get("confirmPassword")
		        }
	      	}).then(function(response) {
	      		self.get("notifications").removeNotification(notif);
	      		self.get("notifications").success("You've successfuly updated your password. You can now log in using your new password.", { autoClear : true });
		    }, function(response) {
		    	var errorStr = "";
		    	for(var i in response.payload.errors) errorStr += response.payload.errors[i][0] + " ";
		    	self.get("notifications").removeNotification(notif);
		    	self.get("notifications").error(errorStr, { autoClear : true });
		    });
		},

	}
	

});

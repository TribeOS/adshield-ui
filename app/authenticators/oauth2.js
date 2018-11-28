import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';
import ENV from 'adshield-ui/config/environment';

export default OAuth2PasswordGrantAuthenticator.extend({

	serverTokenEndpoint : ENV.APP.AUTH_URL,

	// invalidate: function() {
	// 	let access_token = this.get('session.data.authenticated');
	// 	console.log(access_token);
	//     return Ember.$.ajax({
	//     	headers : {
	//     		'Authorization' : 'Bearer ' + access_token
	//     	},
	//       	url:  this.serverTokenEndpoint.replace("/login", "/logout"),
	//       	type: 'DELETE'
	//     });
	// }

});
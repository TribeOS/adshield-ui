import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrantAuthenticator.extend({

	// serverTokenEndpoint: "https://api.adshield.tribeos.io/abcdefg/grant"
	serverTokenEndpoint: "http://localhost:90/abcdefg/grant"

});
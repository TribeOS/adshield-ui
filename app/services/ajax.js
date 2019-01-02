import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import ENV from 'adshield-ui/config/environment';

export default AjaxService.extend({
	session: Ember.inject.service(),
	
	host: ENV.APP.HOST,

	headers : Ember.computed('session.authToken', {
		get() {
			let headers = {};
			let authToken = this.get('session.data.authenticated');
	    	// xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
	    	headers['Authorization'] = 'Bearer ' + authToken.access_token;
	    	return headers;
		}
	}),

});
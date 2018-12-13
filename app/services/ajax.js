import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
	session: Ember.inject.service(),
	
	host: 'http://localhost:90/',

	headers : Ember.computed('session.authToken', {
		get() {
			let headers = {};
			let authToken = this.get('session.data.authenticated');
	    	// xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
	    	headers['auth-token'] = authToken;
	    	return headers;
		}
	}),

});
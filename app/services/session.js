import DS from 'ember-data';
import ESASession from "ember-simple-auth/services/session";
import { computed } from '@ember/object';

export default ESASession.extend({

  	store: Ember.inject.service(),

  	currentUser: computed('isAuthenticated', function() {
    	if (this.get('isAuthenticated')) {
      		const promise = this.get('store').queryRecord('user', {})
      		return DS.PromiseObject.create({ promise: promise })
    	}
  	}),

  	validateToken : function() {
      	const promise = this.get('store').queryRecord('token', {});
		return DS.PromiseObject.create({ promise: promise });
  	}

});
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';


export default DS.RESTAdapter.extend({

	// host : "https://api.adshield.tribeos.io/abcdefg",
	host : "http://localhost:90/abcdefg",

	authorize(xhr) {
		let { access_token } = this.get('session.data.authenticated');
		xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
	},

});

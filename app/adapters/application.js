import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';


export default DS.RESTAdapter.extend(DataAdapterMixin, {

	// host : "https://api.adshield.tribeos.io",
	host : "http://localhost:90",

	authorize(xhr) {
	    let { access_token } = this.get('session.data.authenticated');
	    xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
	},

});

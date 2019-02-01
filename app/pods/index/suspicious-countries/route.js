import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember/service';


export default Route.extend(AuthenticatedRouteMixin, {

	session : service(),
	permission : [4, 2],

	beforeModel(transition) {
		let permission = this.get("session.data.authenticated.permission");
		if (this.get("permission").indexOf(permission) > -1) return;
		this.transitionTo("home");
		alert("Your user account doesn't have permission to access this page.");
	}

});
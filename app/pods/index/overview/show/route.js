import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import ModalRouteMixin from 'ember-routable-modal/mixins/route';

export default Route.extend(ModalRouteMixin, {
	setupController: function(controller, model) {
		controller.set("ip", model.ip);
	},
	model: function(params) {
		return RSVP.hash({
			ip: params.ip
		});
	}
});

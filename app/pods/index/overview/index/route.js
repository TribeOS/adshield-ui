import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import ModalRouteMixin from 'ember-routable-modal/mixins/route';

export default Route.extend(ModalRouteMixin, {
	setupController: function(controller, model) {
		controller.set("listData", model.listData);
		controller.set("listData.data", controller.get("listData.data").sort(custom_sort));
	},
	model: function() {
		return RSVP.hash({
			listData: {
				headers: [
					"IP", "Violations", "Latest"
				],
				data: [
					{
						ip: {
							route: "index.overview.show",
							value: "67.197.148.127",
							param: "67.197.148.127"
						},
						violations: 26,
						date: "2018-02-05 23:12:12"
					},
					{
						ip: {
							route: "index.overview.show",
							value: "24.107.198.190",
							param: "24.107.198.190"
						},
						violations: 2,
						date: "2018-02-05 23:12:12"
					},
					{
						ip: {
							route: "index.overview.show",
							value: "69.76.60.76",
							param: "69.76.60.76"
						},
						violations: 17,
						date: "2018-02-05 23:12:12"
					},
					{
						ip: {
							route: "index.overview.show",
							value: "50.37.77.29",
							param: "50.37.77.29"
						},
						violations: 2,
						date: "2018-02-05 23:12:12"
					},
					{
						ip: {
							route: "index.overview.show",
							value: "68.98.121.115",
							param: "68.98.121.115"
						},
						violations: 1,
						date: "2018-02-05 23:12:12"
					},
					{
						ip: {
							route: "index.overview.show",
							value: "68.53.8.86",
							param: "68.53.8.86"
						},
						violations: 12,
						date: "2018-02-05 23:12:12"
					},
					{
						ip: {
							route: "index.overview.show",
							value: "45.19.109.15",
							param: "45.19.109.15"
						},
						violations: 21,
						date: "2018-02-05 23:12:12"
					},
					{
						ip: {
							route: "index.overview.show",
							value: "68.115.3.49",
							param: "68.115.3.49"
						},
						violations: 4,
						date: "2018-02-05 23:12:12"
					},
					{
						ip: {
							route: "index.overview.show",
							value: "68.13.116.36",
							param: "68.13.116.36"
						},
						violations: 1,
						date: "2018-02-05 23:12:12"
					},
					{
						ip: {
							route: "index.overview.show",
							value: "69.123.62.30",
							param: "69.123.62.30"
						},
						violations: 8,
						date: "2018-02-05 23:12:12"
					}
				]
			}
		})
	}
});

function custom_sort(b, a) {
	return a.violations - b.violations;
}
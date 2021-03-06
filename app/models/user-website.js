import DS from 'ember-data';

export default DS.Model.extend({
	userId : DS.attr(),
	userKey : DS.attr(),
	domain : DS.attr(),
	jsCode : DS.attr(),
	createdOn : DS.attr(),
	status : DS.attr(),
	listData : DS.attr(),
	showDetail : DS.attr(),
});

import DS from 'ember-data';

export default DS.Model.extend({
	firstname : DS.attr(),
	lastname : DS.attr(),
	username : DS.attr(),
	email : DS.attr(),
	accountId : DS.attr(),
	password : DS.attr(),
	password_confirmation : DS.attr(),
	permission : DS.attr(),
	timeZone : DS.attr(),
	isReset : DS.attr("boolean"),
});

import DS from 'ember-data';

export default DS.Model.extend({
	firstname : DS.attr(),
	lastname : DS.attr(),
	username : DS.attr(),
	company : DS.attr(),
	email : DS.attr(),
	password : DS.attr(),
	password_confirmation : DS.attr(),
});

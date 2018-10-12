import DS from 'ember-data';

export default DS.Model.extend({
	password : DS.attr(),
	password_confirmation : DS.attr()
});

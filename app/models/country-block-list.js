import DS from 'ember-data';

export default DS.Model.extend({
	addedOn : DS.attr(),
	country : DS.belongsTo("country"),
	userKey : DS.attr(),
	listData : DS.attr(),
	countryName : DS.attr(),
	countryCode : DS.attr(),
});

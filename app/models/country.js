import DS from 'ember-data';

export default DS.Model.extend({
	countryName : DS.attr("string"),
	countryCode : DS.attr("string"),
	countryBlockList : DS.belongsTo("countryBlockList")
});

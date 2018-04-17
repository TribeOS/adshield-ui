import DS from 'ember-data';

export default DS.Model.extend({
	stat : DS.attr(),
	meta : DS.attr("string"),
});

import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		payload = { knownViolatorDataCenterGraph : payload };
		return this._super(store, primaryModelClass, payload, id, requestType);
	}
});

import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		payload.listData.data.forEach((item, index) => {
			switch(item.status) {
				case 0: item.status = "Blacklisted"; break;
				case 1: item.status = "Whitelisted"; break;
				case 2: item.status = "Greylisted"; break;
			}
		})
		payload = { ipviolatorslist : payload };
		return this._super(store, primaryModelClass, payload, id, requestType);
	}
});

import Component from '@ember/component';

export default Component.extend({

	isCustomDate : false,

	actions : {
		onSelectDay(item) {
			this.sendAction("onSelectDay", item);
		}
	}

});

import Component from '@ember/component';

export default Component.extend({

	isCustomDate : false,

	willRender : function() {
		// this.onSelectDay("7");
	},

	actions : {
		onSelectDay(item) {
			this.onSelectDay(item);
		}
	}

});

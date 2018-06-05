import Component from '@ember/component';

export default Component.extend({

	selectedOption: null,

	actions : {
		setSelection(selected) {
	      	this.set('selectedOption', selected);
	      	this.set('throwValue', selected);
	      	this.sendAction("onSelect", selected);
	    }
	},

});

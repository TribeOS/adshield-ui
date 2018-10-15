import Component from '@ember/component';

/**
 * handles the UI for viewing a dropdown list of websites belonging to the user
 * however it needs the list of websites/userKey as data for display
 * that needs to be fetched from the controller calling this component
 * "ip-base-controller" already has this function and all controllers extends it
 */
export default Component.extend({

	tagName : "div",
	classNames : ["form-group"],

	init() {
		this._super(...arguments);
	},
	
	label : "Show data for website :",
	userWebsites : [],

    actions : {
    	onSelectSite(item) {
        	this.onSelect(item);
        }
    }

});

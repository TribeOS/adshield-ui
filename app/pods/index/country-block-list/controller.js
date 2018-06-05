import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({

	blockList : computed(function() {}),
	searchResult : computed(function() {}),

	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "0", status : 0, ip : "" };
		this.sort = { by : "last_updated", dir : "asc" };
	},


	fetchData : function() {
		var self = this;
		self.get('store').findAll("countryBlockList").then(function(data) {
			self.set("blockList", data);
		});
	},
	
	searchCountry : function(country) {
		//perform search from database
		console.log("search country");
		// var self = this;
		// self.get('store').queryRecord("countryBlockList", {}).then(function(data) {
		// 	console.log(data);
		// });
	},

	blockCountry : function(country) {
		//add blocked country to list
		//send to database for saving
		console.log("block");
	},

	actions : {
		refresh() {
			this.set("page", 1);
			this.fetchData();
		},
		onHide() {
			this.transitionToRoute("index");
		},
		onBlock() {
			this.blockCountry(country);
		},
		onSearch(search) {
			this.searchCountry(search);
		}
	},

});

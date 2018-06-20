import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({


	record : null,
	settings : computed(function() {}),
	userWebsites : null,
	installCode : "",
	isDetailShown : false,

	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "0", status : 0, ip : "" };
		this.sort = { by : "last_updated", dir : "asc" };
	},


	fetchData : function() {
		var self = this;
		self.get('store').query("userWebsite", {}).then(function(data) {
			self.set("userWebsites", data);
		});
	},
	

	saveData : function() {
		// let record = this.get("record");
		// let settings = this.get("settings");
		// record.set("pageData", settings);
		// record.save();
	},

	actions : {
		refresh() {
			this.set("page", 1);
			this.fetchData();
		},
		onHide() {
			this.transitionToRoute("index");
		},
		onSelect(selected) {
		},
		onSave() {
			this.saveData();
		},

		viewDetail(userWebsite) {
			let script = "<script>\n";
				script += "	var _adshield = [];\n";
				script += "	_adshield.push({key:'" + userWebsite.get("userKey") + "'});\n";
				script += "	(function() {\n";
				script += '	var sc = document.createElement("script");\n';
				script += '	sc.type = "text/javascript";sc.async=true;sc.src="https://api.adshield.tribeos.io/adshieldjs";\n';
				script += '	var d = document.getElementsByTagName("script")[0];\n';
				script += "	d.parentNode.insertBefore(sc, d);\n";
				script += "	})();\n";
				script += "</script>";
			this.set("installCode", script);

			this.set("isDetailShown", true);
		},
		hideDetail() {
			this.set("isDetailShown", false);
		},
		createWebsite() {
			// let userWebsites = this.get("userWebsites");
			// let self = this;
			// userWebsites.addObject({
			// 	userKey : self.get("newWebsiteUserKey"),
			// 	domain : self.get("newWebsiteDomain")
			// });
			// this.set("userWebsites", userWebsites);
		}
		
	},

});

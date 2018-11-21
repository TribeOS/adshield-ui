import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({


	record : null,
	settings : computed(function() {}),
	userWebsites : null,
	installCode : "",
	isDetailShown : false,
	newWebsiteUserKey : "",
	newWebsiteDomain : "",


	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "0", status : 0, ip : "" };
		this.sort = { by : "last_updated", dir : "asc" };
	},


	fetchData : function() {
		var self = this;
		self.get('store').queryRecord("userWebsite", { page : self.page, filter : self.filter }).then(function(data) {
			self.set("userWebsites", data);
		});
	},

	createWebsite : function(userKey, siteDomain) {
		let store = this.get("store");
		let website = store.createRecord("userWebsite", {
			userKey : userKey,
			domain : siteDomain,
			status : 1
		});
		let self = this;
		website.save().then(() => {
			self.set("newWebsiteUserKey", "");
			self.set("newWebsiteDomain", "");
			self.fetchData();
		}).catch(function(d) {
			alert(d.errors[0].detail);
		});
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

		viewDetail(userWebsite) {
			let script = "<script>\n";
				script += "	var _adshield = [];\n";
				script += "	_adshield.push({key:'" + userWebsite.userKey + "'});\n";
				script += "	(function() {\n";
				script += '	var sc = document.createElement("script");\n';
				script += '	sc.type = "text/javascript";sc.async=true;sc.src="https://api.adshield.tribeos.io/adshieldjs";\n';
				script += '	var d = document.getElementsByTagName("script")[0];\n';
				script += "	d.parentNode.insertBefore(sc, d);\n";
				script += "	})();\n";
				script += "</script>";
				script += `<noscript><img style="display:none;" width="1" height="1" src="https://api.adshield.tribeos.io/nojs/` + userWebsite.getuserKey + `" /></noscript>`;
			this.set("installCode", script);

			this.set("isDetailShown", true);
		},

		hideDetail() {
			this.set("isDetailShown", false);
		},

		createWebsite() {
			let userKey = this.get("newWebsiteUserKey");
			let siteDomain = this.get("newWebsiteDomain");

			if (userKey.trim().length == 0 || siteDomain.trim().length == 0) {
				alert("Please fill in all the fields.");
				return false;
			}
			this.createWebsite(userKey, siteDomain);
		},

		gotoPage(page) {
			//go to a specific page
			this.page = page;
			this.fetchData();
		}
		
	},

});

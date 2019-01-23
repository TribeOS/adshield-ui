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
	newWebsiteCode : "", //holds the JS code the publisher wants to run 

	selectedWebsite : null,
	isNewWebsite : true, //flag for indicating new website or update

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

	createWebsite : function(userKey, siteDomain, jsCode) {
		let store = this.get("store");
		let website = store.createRecord("userWebsite", {
			userKey : userKey,
			domain : siteDomain,
			status : 1,
			jsCode : jsCode
		});
		let self = this;
		website.save().then(() => {
			self.set("newWebsiteUserKey", "");
			self.set("newWebsiteDomain", "");
			self.set("newWebsiteCode", "");
			self.fetchData();
			alert("New website/domain added.");
		}).catch(function(d) {
			alert(d.errors[0].detail);
		});
	},


	updateWebsite : function(userKey, domain, jsCode) {
		let self = this;
		this.get("store").findRecord("userWebsite", this.selectedWebsite.id).then(function(item) {
			item.set("domain", domain);
			item.set("jsCode", jsCode);
			item.save().then(function() {
				self.fetchData();
				alert("Website updated");
			}).catch(function(error) {
				alert(error.errors[0].detail);
			});
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
				script += `<noscript><img style="display:none;" width="1" height="1" src="https://api.adshield.tribeos.io/nojs/` + userWebsite.userKey + `" /></noscript>`;
			this.set("installCode", script);

			this.set("isDetailShown", true);
		},

		hideDetail() {
			this.set("isDetailShown", false);
		},


		/**
		 * blanks the form, indicate this is a new website not an update
		 * @return {[type]} [description]
		 */
		createWebsite() {
			//clears form and selection
			this.set("isNewWebsite", true);
			this.set("newWebsiteUserKey", "");
			this.set("newWebsiteDomain", "");
			this.set("newWebsiteCode", "");
		},

		updateWebsite(item) {
			this.set("isNewWebsite", false);
			this.set("selectedWebsite", item);
			this.set("newWebsiteUserKey", item.userKey);
			this.set("newWebsiteDomain", item.domain);
			this.set("newWebsiteCode", item.jsCode);
		},

		saveWebsite() {
			let userKey = this.get("newWebsiteUserKey");
			let siteDomain = this.get("newWebsiteDomain");
			let jsCode = this.get("newWebsiteCode");

			if (siteDomain.trim().length == 0 || jsCode.trim().length == 0) {
				alert("Please fill in all the fields.");
				return false;
			}

			if (this.isNewWebsite) {
				this.createWebsite(userKey, siteDomain, jsCode);
			} else {
				this.updateWebsite(userKey, siteDomain, jsCode);
			}
		},

		gotoPage(page) {
			//go to a specific page
			this.page = page;
			this.fetchData();
		}
		
	},

});

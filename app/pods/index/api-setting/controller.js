import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({


	record : null,
	settings : computed(function() {}),
	userWebsites : null,
	installCode : "",
	newWebsiteUserKey : "",
	newWebsiteDomain : "", 
	websiteCode : [], //holds the JS code the publisher wants to run 

	selectedWebsite : null,
	isNewWebsite : true, //flag for indicating new website or update

	adshieldCode : computed("selectedWebsite", function() {
		return `<script>\n`
			+ `	var _adshield = []; _adshield.push({key:'${this.selectedWebsite.userKey}'});\n`
			+ `	(function() {\n`
			+ `		var sc = document.createElement("script");\n`
			+ `		sc.type = "text/javascript";\n`
			+ `		sc.async=true;sc.src="https://api.adshield.tribeos.io/adshieldjs";\n`
			+ `		var d = document.getElementsByTagName("script")[0];\n`
			+ `		d.parentNode.insertBefore(sc, d);\n`
			+ `	})();\n`
			+ `</script>\n`
			+ `<noscript><img style="display:none;" width="1" height="1" src="https://api.adshield.tribeos.io/nojs/${this.selectedWebsite.userKey}" /></noscript>`;
	}),

	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "7", status : 0, ip : "" };
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
		let newWebsite = {
			userKey : userKey,
			domain : siteDomain,
			status : 1,
			jsCode : jsCode
		};
		let website = store.createRecord("userWebsite", newWebsite);
		let self = this;
		this.showBusy('Creating website ...');
		website.save().then(() => {
			newWebsite.userKey = website.get("userKey");
			newWebsite.id = website.get("id");
			self.openWebsite(newWebsite);
			self.hideBusy();
			self.showAlert("success", "New website/domain added.");
		}).catch(function(d) {
			self.hideBusy();
			self.showAlert("error", d.errors[0].detail);
		});
	},


	updateWebsite : function(userKey, domain, jsCode) {
		let self = this;
		this.showBusy('Updating website ...');
		this.get("store").findRecord("userWebsite", this.selectedWebsite.id).then(function(item) {
			item.set("domain", domain);
			item.set("jsCode", jsCode);
			item.save().then(function() {
				self.fetchData();
				self.hideBusy();
				self.showAlert("success", "Website updated");
			}).catch(function(error) {
				self.hideBusy();
				self.showAlert("error", d.errors[0].detail);
			});
		});
	},


	deleteWebsite : function(website) {
		let self = this;
		this.get("store").findRecord("userWebsite", website.id).then(function(item) {
			item.set("status", 0);
			item.save().then(function() {
				self.fetchData();
				self.showAlert("success", "Website was deleted!");
			}).catch(function(error) {
				self.showAlert("error", error);
			});
		});
	},


	/**
	 * checks if the given title already exists in the user's list of ad code for this website
	 * @param  {[type]} title [description]
	 * @return {[type]}       [description]
	 */
	containerExists : function(container, index) {
		let exists = false;
		if (typeof index == 'undefined') index = -1;
		this.get("websiteCode").forEach(function(item, id) {
			if (item.container == container && index != id) {
				exists = true;
				return false;
			}
		});
		return exists;
	},


	openWebsite : function(item) {
		this.set("isNewWebsite", false);
		this.set("selectedWebsite", item);
		this.set("newWebsiteUserKey", item.userKey);
		this.set("newWebsiteDomain", item.domain);
		this.set("websiteCode", item.jsCode);
	},


	areContainersUnique : function(jsCode) {
		let self = this;
		//check for duplicate containers/title
		let duplicateContainer = false;
		jsCode.forEach(function(item, index) {
			if (self.containerExists(item.container, index)) {
				duplicateContainer = true;
				return false;
			}
		});
		return !duplicateContainer;
	},

	areAdcodesValid : function(jsCode) {
		let isEmpty = false;
		jsCode.forEach(function(item, index) {
			if (item.code.trim().length == 0) {
				isEmpty = true;
				return false;
			}
		});
		return !isEmpty;
	},


	actions : {

		refresh() {
			this.set("page", 1);
			this.fetchData();

			this.set("isNewWebsite", true);
			this.set("newWebsiteUserKey", "");
			this.set("newWebsiteDomain", "");
			this.set("websiteCode", []);
			this.set("selectedWebsite", null);
		},
		
		onHide() {
			this.transitionToRoute("index");
		},

		onSelect(selected) {
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
			this.set("websiteCode", []);
		},

		updateWebsite(item) {
			this.set("isNewWebsite", false);
			this.set("selectedWebsite", item);
			this.set("newWebsiteUserKey", item.userKey);
			this.set("newWebsiteDomain", item.domain);
			this.set("websiteCode", item.jsCode);
		},

		deleteWebsite(website) {
			if(!confirm("Are you sure you want to delete this website?")) return false;
			this.deleteWebsite(website);
		},

		saveWebsite(objAccordion) {
			let self = this;
			let userKey = this.get("newWebsiteUserKey");
			let siteDomain = this.get("newWebsiteDomain");
			let jsCode = this.get("websiteCode");

			//perform general validation
			if (siteDomain.trim().length == 0) {
				self.showAlert("error", "Please fill in all the fields.");
				return false;
			} else if (jsCode.length == 0) {
				self.showAlert("warning", "Your website needs to have at least one JS Ad Code to protect.");
				return false;
			}

			//validate each ad code entry
			if (!this.areContainersUnique(jsCode)) {
				self.showAlert("warning", "Ad Code container needs to be unique.");
				return false;
			} else if (!this.areAdcodesValid(jsCode)) {
				self.showAlert("warning", "You need to place an Ad Code/JS Code in your containers");
				return false;
			}

			if (this.isNewWebsite) {
				this.createWebsite(userKey, siteDomain, jsCode);
				objAccordion.change("step3");
			} else {
				this.updateWebsite(userKey, siteDomain, jsCode);
			}
		},

		/**
		 * handler for js code management
		 */
		
		/**
		 * remove js code entry
		 * @return {[type]} [description]
		 */
		removeJsCode(item) {
			this.get("websiteCode").removeObject(item);
		},

		/**
		 * create a new tab for new js code
		 */
		addJsCode() {
			let container = "";
			let count = 0;
			do {
				count = Math.ceil(Math.random() * 100 + 1000);
				container = "ad-code" + count;
			} while (this.containerExists(container));
			this.get("websiteCode").addObject({ "container" : "ad-code" + count, code : "", intoContainer : true });
		},

		enteredDomain(objAccordion) {
			let pattern = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
			if (this.newWebsiteDomain.match(pattern) == null) {
				this.showAlert("warning", "Please enter a valid domain name");
				return;
			}
			objAccordion.change("step2");
		},


		copySuccess(e) {
			this.showAlert("success", "Copied! Paste this into your webpage.");
		},

		gotoPage(page) {
			//go to a specific page
			this.page = page;
			this.fetchData();
		}
		
	},

});

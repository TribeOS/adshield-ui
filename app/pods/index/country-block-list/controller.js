import IpBaseController from '../../ip-base-controller/controller';
import {
    computed
} from "@ember/object";

export default IpBaseController.extend({
    blockList: [],
    searchResult: computed(function() {}),
    keyword: "",
    userWEbsites : [],

    init: function() {
        this._super(...arguments);
        this.filter = {
            userKey: "",
            duration: "0",
            status: 0,
            ip: ""
        };
        this.sort = {
            by: "last_updated",
            dir: "asc"
        };
    },
    fetchData: function() {
        var self = this;
        self.get('store').query("countryBlockList", { filter : self.filter }).then(function(data) {
            self.set("blockList", data);
        });
    },
    searchCountry: function(keyword) {
        var self = this;
        this.set('keyword', keyword);
        self.get('store').query("country", {
            countryCode: keyword,
            countryName: keyword,
            userKey : self.filter.userKey
        }).then(function(data) {
            let result = data;
            result.forEach(function(item) {
                item.set("selected", false);
            });
            self.set("searchResult", result);
        });
    },
    blockCountry: function() {
        let result = this.get("searchResult");
        let selectedCountries = result.filterBy('selected', true);
        if (selectedCountries.length == 0) return;
        let self = this;
        selectedCountries.forEach(function(item) {
            let country = self.get("store").peekRecord("country", item.id);
            let entry = self.get("store").createRecord("countryBlockList", {
                country: country,
                userKey : self.filter.userKey
            });
            entry.save().then(function(response) {
            	self.fetchData();
        	});
        });
        this.set("searchResult", null);
    },
    removeCountry: function(item) {
        this.get("store").findRecord("countryBlockList", item.id, {
            backgroundReload: false
        }).then(function(record) {
            record.destroyRecord();
        });
    },

    fetchMySites : function() {
    	var self = this;
        self.get('store').query("userWebsite", { filter : {} }).then(function(data) {
			self.set("userWebsites", data);
		});
    },

    actions: {
        refresh() {
            this.set("page", 1);
            this.fetchData();
            this.fetchMySites();
        },
        onHide() {
            this.transitionToRoute("index");
        },
        onBlock() {
            this.blockCountry();
        },
        onSearch(search) {
            this.searchCountry(search);
        },
        onRemove(item) {
            this.removeCountry(item);
        },
        onCancel() {
            this.set("searchResult", null);
            this.set("keyword", "");
        },
        onSelectSite(item) {
        	this.filter.userKey = item;
        	this.fetchData();
        	this.searchCountry(this.keyword);
        }
    },
});
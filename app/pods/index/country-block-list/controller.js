import IpBaseController from '../../ip-base-controller/controller';
import {
    computed
} from "@ember/object";

export default IpBaseController.extend({
    blockList: [],
    searchResult: computed(function() {}),
    keyword: "",
    userWebsites : [],

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
        this.showBusy('Fetching countries ...');
        self.get('store').queryRecord("countryBlockList", { page : this.page, limit : this.limit, filter : self.filter }).then(function(data) {
            self.set("blockList", data.get("listData"));
            self.hideBusy();
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
        if (result == null) return;
        let selectedCountries = result.filterBy('selected', true);
        if (selectedCountries.length == 0) return;
        let self = this;
        this.showBusy('Setting blocked countries ...');
        selectedCountries.forEach(function(item) {
            let country = self.get("store").peekRecord("country", item.id);
            let entry = self.get("store").createRecord("countryBlockList", {
                country: country,
                userKey : self.filter.userKey
            });
            entry.save();
        });
        this.set("searchResult", null);
        this.hideBusy();
        this.fetchData();
    },

    removeCountry: function(item) {
        let self = this;
        this.get("store").findRecord("countryBlockList", item.id, {
            backgroundReload: false
        }).then(function(record) {
            record.destroyRecord().then(() => {
                self.fetchData();
            }).catch((error) => {
                self.showAlert("warning", error);
            });
        }).catch((error) => {
            self.showAlert("warning", error);
        });
    },
    

    actions: {
        gotoPage(page) {
            this.page = page;
            this.fetchData();
        },

        refresh() {
            this.set("page", 1);
            let self = this;
            this.fetchMySites(function(data) {
                self.userWebsites.splice(0, 1);
                self.filter.userKey = self.userWebsites[0].userKey;
                self.fetchData();
            });
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
            this.page = 1;
        	this.filter.userKey = item;
        	this.fetchData();
        	this.searchCountry(this.keyword);
        }
    },
});
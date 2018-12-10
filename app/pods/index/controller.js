import Controller from '@ember/controller';
import { computed } from "@ember/object";
import { later } from '@ember/runloop';
import { inject as service } from '@ember/service';
import Ember from 'ember';


export default Controller.extend({

	init : function() {
		this._super();
		this.index = [{
			col: 0,
			menu: [{
				bgimage: "assets/images/db_img.jpg",
				title: "AdShield",
				items: [{
					route: "index.dashboard",
					title: "Dashboard"
				}]
			},{
				icon: "assets/images/icon_stat.png",
				title: "Threats Summary",
				items: [{
					route: "index.threats-summary",
					title: "Summary"
				},{
					route: "index.automated-traffic",
					title: "Automated Traffic"
				},{
					route: "index.traffic-by-org",
					title: "Traffic By Organization"
				},{
					route: "index.suspicious-countries",
					title: "Suspicious Countries"
				}]
			},{
				icon: "assets/images/icon_sell.png",
				title: "Summary Reports",
				items: [{
					route: "index.click-fraud-report",
					title: "Click Fraud"
				},{
					route: "index.captcha-request",
					title: "Captcha Requests"
				},{
					route: "index.desirable-automated-traffic",
					title: "Desirable Automated Traffic"
				},{
					route: "index.targeted-content",
					title: "Targeted Content"
				}]
			},{
				items: [{
					route: "index.complete-log",
					title: "Complete Log"
				}]
			}
		]},{
			col: 1,
			menu: [
			{
				icon: "assets/images/icon_url.png",
				title: "URL Referrals",				
				items : [
					{
						type : 'component',
						name : 'adshield-stat',
						showStat : true
					},
					{
						type : 'component',
						name : 'adshield-stat',
						showLive : true
					},
					{
						type : 'component',
						name : 'adshield-stat',
						showClicks : true
					},
					{
						type : 'component',
						name : 'adshield-stat',
						showCount : true
					}
				]
			},{
				icon: "assets/images/icon_settings.png",
				title: "Settings",
				items: [{
					route : "index.api-setting",
					title : "Api Settings"
				},{
					route: "index.content-protection",
					title: "Content Protection"
				},{
					route: "index.custom-page",
					title: "Custom Pages"
				},{
					route: "index.ip-access-list",
					title: "IP Access List"
				},{
					route: "index.country-block-list",
					title: "Country Block List"
				},{
					route: "index.content-distribution",
					title: "Content Distribution"
				},{
					route: "index.account-management",
					title: "Account Management"
				}]
			}]
		},{
			col: 2,
			menu: [{
				icon: "assets/images/icon_support.png",
				title: "Protection Summary",
				items: [{
					route: "index.overview",
					title: "Overview"
				},{
					route: "index.known-violators",
					title: "Known Violators"
				},{
					route: "index.js-check-failed",
					title: "JavaScript Check Failed"
				},{
					route: "index.js-not-loaded",
					title: "JavaScript Not Loaded"
				},{
					route: "index.known-violator-user-agent",
					title: "Known Violator User Agent"
				},{
					route: "index.susp-user-agent",
					title: "Suspicious User Agents"
				},{
					route: "index.browser-integrity-check",
					title: "Browser Integrity Check"
				},{
					route: "index.known-violator-data-center",
					title: "Known Violator Data Center"
				},{
					route: "index.pages-per-minute-exceed",
					title: "Pages Per Minute Exceeded"
				},{
					route: "index.pages-per-session-exceed",
					title: "Pages Per Session Exceeded"
				},{
					route: "index.blocked-country",
					title: "Blocked Country"
				},{
					route: "index.aggregator-user-agent",
					title: "Aggregator User Agents"
				},{
					route: "index.known-violator-auto-tool",
					title: "Known Violator Automation Tool"
				}]
			},{
				icon: "assets/images/icon_buy.png",
				title: "Traffic Summary",
				items: [{
					route: "index.traffic-summary",
					title: "Summary"
				},{
					route: "index.cache-analysis",
					title: "Cache Analysis"
				},{
					route: "index.upstream-http-errors",
					title: "Upstream HTTP Errors"
				}]
		}]
		}];

	},


	session : Ember.inject.service('session'),

	socketServerUrl : "https://socketio.adshield.tribeos.io",

	lastGraphData : 0,

	adshieldStats : computed(function() {
		return {};
	}),

	//will hold account's websites
	userWebsites : [],

	//holds the websites' stats
	websiteStats : [],

	user : {},

	socketio: service("socket-io"),

	initFetchData : function() {
		var self = this;
		self.get('store').queryRecord('adshieldstat', {}).then(function(data) 
		{
			self.updateStats(data.get("stat"), true);
		});

		this.user = this.get('session.data.authenticated');
	},

	initSocketIO : function() {
		//IMPT/ TODO: need to find a way to tell server which account/userKey we want to receive
		let self = this;
		let socket = this.get("socketio").socketFor(this.get("socketServerUrl"));
		socket.on("connect", function() {
			// socket.on("adshield." + self.user.accountId + ":App\\Events\\AdShieldUpdated", self.dataReceived, self);
			socket.on("adshield:App\\Events\\AdShieldUpdated", self.dataReceived, self);
		});
	},


	dataReceived : function(data) {
		let stats = data.stats.adshieldstats.stat;
		let graphData = stats.transactionsInterval;
		
		// if (stats.accountId != this.user.accountId) return;
		console.log(data);
		this.set("lastGraphData", parseInt(graphData));
		this.updateStats(stats, false);
	},


	updateStats : function(data, includeGraph) {
		let asStat = data
		
		if (includeGraph) {
			let cData = this.get("adshieldChartData");
			let maxPoint = 60;
			if (cData.labels.length < maxPoint) cData.labels.push('');
			if (cData.datasets[0].data.length == maxPoint) cData.datasets[0].data.splice(0, 1);
			cData.datasets[0].data.push(asStat.transactionsInterval);
			this.set("adshieldChartData", cData);
			this.notifyPropertyChange('adshieldChartData');
		}
		try {
			asStat.filteredStats = this.getFilteredStats(asStat);
		} catch (e) {}
		this.set("adshieldStats", asStat);
	},

	/**
	 * filtered stats to hide some data that aren't being used yet.
	 * no point of showing it yet
	 * @param  {[type]} ) {		var       model [description]
	 * @return {[type]}   [description]
	 */
	getFilteredStats : function(stats) {
		var newstats = stats.stat.filter(function(item) {
			if (item.status == 6 || item.status == 1) return false;
			return true;
		});
		return newstats;
	},

	adshieldChartData : computed(function() {
		let currentStat = this.get("adshieldStats");
		let stat = currentStat;
		let data = {};
		let values = 0;
		if (typeof stat !== 'undefined') values = stat.transactionsInterval;
		data.datasets = [];
		data.labels = [''];
		data.datasets.push({
			label : "Transactions",
            data : [values],
			backgroundColor : [
				'rgba(109,186,252,1)',
				'rgba(109,186,252,1)'
			],
			borderColor: [
                'rgba(109,186,252,1)',
                'rgba(109,186,252,1)',
            ],
            borderWidth : 1
		});
		return data;
	}),


	/**
	 * fetch account's websites
	 * @param  {[type]} onFetchDone [description]
	 * @return {[type]}             [description]
	 */
	fetchMySites : function(onFetchDone) {
    	var self = this;
        self.get('store').query("userWebsite", { filter : {} }).then(function(data) {
			self.set("userWebsites", data);
			if (typeof onFetchDone !== "undefined") onFetchDone();
		});
    },


	actions : {

		onFinishedLoading() {
			this.initFetchData();
			this.initSocketIO();
		},
		didLogOut() {
			this.transitionToRoute("login");
		}

	}


});

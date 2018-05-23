import Controller from '@ember/controller';
import { computed } from "@ember/object";

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
					route: "index.click-fraud",
					title: "Click Fraud"
				},{
					route: "index.captcha-requests",
					title: "Captcha Requests"
				},{
					route: "index.desirable-auto",
					title: "Desirable Automated Traffic"
				},{
					route: "index.targeted-content",
					title: "Targeted Content"
				}]
			}
		]},{
			col: 1,
			menu: [{
				icon: "assets/images/icon_settings.png",
				title: "Settings",
				items: [{
					route: "index.content-protection",
					title: "Content Protection"
				},{
					route: "index.custom-pages",
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
			},{
				items: [{
					route: "index.complete-log",
					title: "Complete Log"
				}]
			},{
				icon: "assets/images/icon_buy.png",
				title: "Traffic Summary",
				items: [{
					route: "index.summary",
					title: "Summary"
				},{
					route: "index.cache-analysis",
					title: "Cache Analysis"
				},{
					route: "index.upstream-http-errors",
					title: "Upstream HTTP Errors"
				}]
		}]},{
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
					route: "index.javascript-check-failed",
					title: "JavaScript Check Failed"
				},{
					route: "index.javascript-not-loaded",
					title: "JavaScript Not Loaded"
				},{
					route: "index.known-violator-user-agent",
					title: "Known Violator User Agent"
				},{
					route: "index.suspicious-user-agents",
					title: "Suspicious User Agents"
				},{
					route: "index.browser-integrity-check",
					title: "Browser Integrity Check"
				},{
					route: "index.known-violator-data-centre",
					title: "Known Violator Data Centre"
				},{
					route: "index.pages-per-minute-exceeded",
					title: "Pages Per Minute Exceeded"
				},{
					route: "index.pages-per-session-exceeded",
					title: "Pages Per Session Exceeded"
				},{
					route: "index.blocked-country",
					title: "Blocked Country"
				},{
					route: "index.aggregator-user-agents",
					title: "Aggregator User Agents"
				},{
					route: "index.known-violator-automation-tool",
					title: "Known Violator Automation Tool"
				}]
			}]
		}];
	},


});

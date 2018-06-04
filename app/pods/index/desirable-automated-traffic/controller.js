import IpBaseController from '../../ip-base-controller/controller';
import { computed } from "@ember/object";

export default IpBaseController.extend({


	chartData : computed(function() {}),

	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "0", status : 0, ip : "" };
		this.sort = { by : "last_updated", dir : "asc" };
	},


	refreshList : function(page, limit, filter, sort) {
		var self = this;
		self.get('store').queryRecord("desirableAutomatedTraffic", { page : page, limit : limit, filter : filter, sort : sort }).then(function(data) {
			let pageData = data.get("pageData");
			let chartData = {};
			chartData.desirableAutomatedRequests = self.generateGraphData(pageData.desirableAutomatedRequests);
			self.set("chartData", chartData);

			let listData = {};
			listData.data = pageData.listData;
			listData.headers = ['System Name', '# of Requests'];
			self.set("listData", listData);
			console.log(listData);
		});
	},

	generateGraphData : function(graphData) {
		let chartData = {};
		chartData.datasets = [];
		chartData.labels = graphData.label;
		let color = ['rgba(190, 50, 0, 1)', 'rgba(190, 50, 220, 1)'];
		for(var i in graphData.datasets) {
			chartData.datasets.push({
				label : graphData.datasets[i].label,
				data : graphData.datasets[i].data,
				fill : false,
				borderColor : [
					color[i]
				]
			});
		}
		return chartData;
	},

	graphOption : computed(function() {
		var options = {
			title : {
				text : "test"
			},
			legend:{
				display : true,
			},
			tooltips : {
				enabled : true
			},
		}
		return options;
	}),


	actions : {
		firstPage() {
			this.set("page", 1);
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		nextPage() {
			var listData = this.get("listData");
			if (listData.current_page == listData.last_page) return;
			this.set("page", parseInt(this.page) + 1);
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		previousPage() {
			var listData = this.get("listData");
			if (listData.current_page == 1) return;
			this.set("page", parseInt(this.page) - 1);
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		lastPage() {
			var listData = this.get("listData");
			this.set("page", listData.last_page);
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		onSelectDay(value) {
			this.filter.duration = value;
		},
		refresh() {
			this.set("page", 1);
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
		onHide() {
			this.transitionToRoute("index");
		},
	},

});

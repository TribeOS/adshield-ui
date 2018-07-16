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
		self.get('store').queryRecord("upstreamHttpError", { page : page, limit : limit, filter : filter, sort : sort }).then(function(data) {
			let pageData = data.get("pageData");
			let chartData = {};
			chartData = self.generateChartData(pageData.errorGraph);
			self.set("chartData", chartData);

			let listData = {};
			listData.data = pageData.errorsList;
			listData.headers = ['Time', '4XX', '5XX', 'Total Requests'];
			self.set("listData", listData);
		});
	},


	chartOptions : computed(function() {
		var options = {
			legend:{
				display : true,
				position : "right"
			},
			tooltips : {
				enabled : true
			},
			scales : {
				xAxes : [{
					ticks : {
						min : 0,
					},
				}]
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
			this.refreshList(this.page, this.limit, this.filter, this.sort);
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

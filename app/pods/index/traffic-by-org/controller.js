import IpBaseController from '../../ip-base-controller/controller';


export default IpBaseController.extend({

	init : function() {
		this._super(...arguments);
		this.filter = { userKey : "", duration : "0", status : 0, ip : "" };
		this.sort = { by : "last_updated", dir : "asc" };
	},


	refreshList : function(page, limit, filter, sort) {
		let self = this;
		self.get('store').queryRecord("trafficByOrg", { filter : this.filter }).then(function(data) {
			let listData = data.get("listData");
			listData.headers = ['Organization', 'Total Threats', 'Top Country by Threats'];
			
			self.set("listData", listData);
		});
	},


	actions : {
		onSelectDay(value) {
			this.filter.duration = value;
			this.refreshList(this.page, this.limit, this.filter, this.sort);
		},
	}

});

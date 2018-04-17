import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({

	filteredStats : computed(function() {
		var model = this.get('model');
		var stats = model.get('firstObject').get('stat');
		var newstats = stats.stat.filter(function(item) {
			if (item.status == 6 || item.status == 1) return false;
			return true;
		});
		return newstats;
	})

});

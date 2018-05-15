import Controller from '@ember/controller';

export default Controller.extend({

	// sample data
	data : {
		headers : ["IP", "URL", "Website", "Created On"],
		data : [
			{ 
				value : ["192.168.0.1", "test url", "AdOS", "2018-01-01 10:01:10"]
			}
		]
	}

});

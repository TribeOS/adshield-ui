import { helper } from '@ember/component/helper';

export function showCoverage(params/*, hash*/) {
	switch(params[0]) {
		case "all" : return "All Events"; break;
		case "settings" : return "Settings Updated"; break;
		case "violations" : return "Violations Detected"; break;
	}
}

export default helper(showCoverage);
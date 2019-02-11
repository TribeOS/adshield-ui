import { helper } from '@ember/component/helper';

export function showCoverage(params/*, hash*/) {
	switch(params[0]) {
		case "all" : return "All Events"; break;
		case "settings" : return "Settings"; break;
		case "violations" : return "Violations"; break;
	}
}

export default helper(showCoverage);
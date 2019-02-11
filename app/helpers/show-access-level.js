import { helper } from '@ember/component/helper';

export function showAccessLevel(params/*, hash*/) {
	switch(parseInt(params[0])) {
		case 1 : return "Account Access"; break;
		case 2 : return "Report Access"; break;
		case 3 : return "Settings Access"; break;
		case 4 : return "Admin"; break;
		default: return "N/A";
	}
}

export default helper(showAccessLevel);

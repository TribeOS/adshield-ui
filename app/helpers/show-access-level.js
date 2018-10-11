import { helper } from '@ember/component/helper';

export function showAccessLevel(params/*, hash*/) {
	console.log(params[0]);
	switch(params[0]) {
		case 1 : return "Account Access"; break;
		case 2 : return "Report Access"; break;
		case 3 : return "Settings Access"; break;
		default: return "N/A";
	}
}

export default helper(showAccessLevel);

import { helper } from '@ember/component/helper';

export function formatNumber(params/*, hash*/) {
  	return params.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
}

export default helper(formatNumber);

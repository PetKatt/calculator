export default function isNumber(item) {
	return !!item.match(/[0-9]+/);

/* More beautiful form:
		return (item.match(/[0-9]+/) !== null) ? true : false; 
*/
}
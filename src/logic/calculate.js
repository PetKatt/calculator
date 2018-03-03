import operate from "./operate";
import isNumber from "./isNumber";

/*
	Given a button name and a calculator data object, return an updated calculator data object.

	Calculator data object contains:
		total:String       the running total
		next:String        the next number to be operated on with the total
		operation:String   +, -, etc. 
*/

export default function calculate(obj, buttonName) {
	if (buttonName === "AC") {
		return {
			total: null,
			next: null,
			operation: null
		};
	}

/*------------------------------------------------*/

/* buttonName is a Number*/
	if (isNumber(buttonName)) {
		if (buttonName === "0" && obj.next === "0") {
			return {};
		}

		/* If there is an operation already, update next*/
		if (obj.operation) {
			if (obj.next) {
				return { next: obj.next + buttonName };
			}
			return { next: buttonName };
		}

		/* If there is no operation, update next and clear the total value*/
		if (obj.next) {
			return {
				next: obj.next + buttonName,
				total: null
			};
		}

		return {
			next: buttonName,
			total: null
		};
	}


/*--------------------------------------------*/

/* buttonName is NOT a Number*/

/* buttonName is "." */
	if (buttonName === ".") {

		if (obj.next) {
			if (obj.next.includes(".")) {
				return {};
			}
			return { next: obj.next + "." };
		}

		if (obj.operation) {
			return { next: "0." };
		}

		if (obj.total) {
			if (obj.total.includes(".")) {
				return {};
			}
			return { total: obj.total + "." };
		}

		return { total: "0." };
	}

/* buttonName is "=" */
	if (buttonName === "=")	{
		if (obj.next && obj.operation) {
			return {
				total: operate(obj.total, obj.next, obj.operation),
				next: null,
				operation: null
			};
		} else {
			// nothing to do
			return {};
		}
	}

/* buttonName is "+/-" */
	if (buttonName === "+/-") {
		if (obj.next) {
			return { next: (-1 * parseFloat(obj.next)).toString() };
		}
		if (obj.total) {
			return { total: (-1 * parseFloat(obj.total)).toString() };
		}

		return {};
	}


/*-----------------------------------------*/

/*Button MUST BE an Operation*/

/* The user has not typed any Number (neither next nor total) */
	if (!obj.next && !obj.total) {
		return {};
	}
/* The user has not typed a next number yet, just save the operation*/
	if (!obj.next) {
		return { operation: buttonName };
	}
/* The user already typed the next number then shift next into total and save the operation */
	if (obj.next) {
		return {
			total: obj.next,
			next: null,
			operation: buttonName
		};
	}

/* The user pressed an operation button second time (there is one already) */
	if (obj.operation) {
		return {
			total: operate(obj.total, obj.next, obj.operation),
			next: null,
			operation: buttonName
		};
	}



}
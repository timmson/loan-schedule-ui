import Accounting from "accounting"

export const toM = (number) =>
	number ? Accounting.formatMoney(number, {symbol: "", format: "%s%v", thousand: " "}) : number

export const fromM = (numberWithSpaces) =>
	numberWithSpaces ? numberWithSpaces.toString().replaceAll(" ", "").replaceAll(",", ".") : numberWithSpaces
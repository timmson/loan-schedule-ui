import Accounting from "accounting"

export const toM = (number: string | number): string =>
	number ? Accounting.formatMoney(number, {symbol: "", format: "%s%v", thousand: " "}) : number

export const fromM = (numberWithSpaces: string): string =>
	numberWithSpaces ? numberWithSpaces.toString().replaceAll(" ", "").replaceAll(",", ".") : numberWithSpaces
import LoanSchedule from "loan-schedule.js"
import {RequestType} from "./types"

const fields = {
	amount: 2000000,
	rate: 9.5,
	term: 240,
	paymentAmount: "",
	issueDate: new Intl.DateTimeFormat("ru").format(new Date()),
	paymentOnDay: 1
}

export default function Storage(window) {
	const params = new URL(window.location.href).searchParams
	const storage = window.localStorage

	return {
		load: (): RequestType => {
			const request = {
				scheduleType: LoanSchedule.ANNUITY_SCHEDULE,
				earlyRepayment: {}
			}
			Object.keys(fields).forEach((name) => request[name] = params.get(name) || storage.getItem(name) || fields[name])
			return request
		},

		save: (request: RequestType) => {
			Object.keys(fields).forEach((name) => {
				window.localStorage.setItem(name, request[name])
				params.set(name, request[name])
			})
			window.history.replaceState({}, "Loan Amortization Schedule", "?" + params.toString())
		},

		reset: () => {
			window.localStorage.clear()
			Object.keys(fields).forEach((name) => params.delete(name))
			window.history.replaceState({}, "Loan Amortization Schedule", "?" + params.toString())
		}

	}
}
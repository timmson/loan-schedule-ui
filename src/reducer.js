import {CHANGE_FORM, UPDATE_SCHEDULE} from "./constants"
import LoanSchedule from "loan-schedule.js"
import {fromM, toM} from "./money"

const loanSchedule = new LoanSchedule({
	prodCalendar: "ru"
})

export function schedule(request) {
	const schedule = loanSchedule.calculateSchedule(request)
	schedule.lastPaymentDate = schedule.payments[schedule.payments.length - 1].paymentDate
	schedule.termInYear = Math.ceil(schedule.term / 12)
	return schedule
}

export default function Reducer(state, action) {
	switch (action.type) {
	case UPDATE_SCHEDULE: {
		return {
			request: {
				...state.request,
				amount: toM(state.request.amount),
				paymentAmount: toM(state.request.paymentAmount)
			},
			schedule: schedule({
				...state.request,
				amount: fromM(state.request.amount),
				paymentAmount: fromM(state.request.paymentAmount)
			})
		}
	}
	case CHANGE_FORM: {
		return {
			...state,
			request: {
				...state.request,
				[action.name]: action.value
			}
		}
	}
	default: {
		return state
	}
	}
}
import {CHANGE_FORM, UPDATE_SCHEDULE} from "./constants"
import LoanSchedule from "loan-schedule.js"

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
			...state,
			schedule: schedule(state.request)
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
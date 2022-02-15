import {ADD_EARLY, CHANGE_FORM, DELETE_EARLY, INIT, SET_DEFAULT, UPDATE_SCHEDULE} from "./constants"
import {fromM, toM} from "./money"

export default function Reducer(storage, loanSchedule) {

	const init = () => {
		const request = storage.load()
		return updateSchedule(request)
	}

	const updateSchedule = (request) => {
		storage.save(request)
		const filteredRequest = {
			...request,
			amount: fromM(request.amount),
			paymentAmount: fromM(request.paymentAmount),
			earlyRepaymentAmount: fromM(request.earlyRepaymentAmount)
		}

		if (filteredRequest.earlyRepaymentDate && filteredRequest.earlyRepaymentAmount) {
			filteredRequest.earlyRepayment[filteredRequest.earlyRepaymentDate] = {
				erAmount: filteredRequest.earlyRepaymentAmount,
				erType: loanSchedule.ER_TYPE_MATURITY
			}
			delete filteredRequest.earlyRepaymentDate
			delete filteredRequest.earlyRepaymentAmount
		}

		const schedule = loanSchedule.calculateSchedule(filteredRequest)
		schedule.lastPaymentDate = schedule.payments[schedule.payments.length - 1].paymentDate
		schedule.termInYear = Math.ceil(schedule.term / 12)
		schedule.overAllInterest = toM(schedule.overAllInterest)
		return {
			request: {
				...filteredRequest,
				amount: toM(filteredRequest.amount),
				paymentAmount: toM(filteredRequest.paymentAmount)
			},
			schedule: {
				...schedule,
				lastPaymentDate: schedule.payments[schedule.payments.length - 1].paymentDate,
				termInYear: Math.ceil(schedule.term / 12),
				overAllInterest: toM(schedule.overAllInterest),
				fullAmount: toM(schedule.fullAmount)
			}
		}
	}

	return (state, action) => {
		switch (action.type) {
		case SET_DEFAULT: {
			storage.reset()
			return init()
		}

		case INIT: {
			return init()
		}

		case UPDATE_SCHEDULE: {
			return updateSchedule(state.request)
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


		/*			case CUT_SCHEDULE: {
				return updateSchedule({
					...state.request,
					amount: action.amount,
					issueDate: action.issueDate,
					term: action.term
				})
			}*/

		case ADD_EARLY: {
			return updateSchedule({
				...state.request,
				earlyRepaymentDate: action.date,
				earlyRepaymentAmount: action.amount
			})
		}

		case DELETE_EARLY: {
			delete state.request.earlyRepayment[action.date]
			return updateSchedule(state.request)
		}

		default: {
			return state
		}
		}
	}

}
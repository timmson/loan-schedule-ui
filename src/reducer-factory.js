import {CHANGE_FORM, INIT, SET_DEFAULT, UPDATE_SCHEDULE} from "./constants"
import {fromM, toM} from "./money"

export default function ReducerFactory(storage, loanSchedule) {

	const init = () => {
		const request = storage.load()
		return updateSchedule(request)
	}

	const updateSchedule = (request) => {
		storage.save(request)
		const schedule = loanSchedule.calculateSchedule({
			...request,
			amount: fromM(request.amount),
			paymentAmount: fromM(request.paymentAmount)
		})
		schedule.lastPaymentDate = schedule.payments[schedule.payments.length - 1].paymentDate
		schedule.termInYear = Math.ceil(schedule.term / 12)
		schedule.overAllInterest = toM(schedule.overAllInterest)
		return {
			request: {
				...request,
				amount: toM(request.amount),
				paymentAmount: toM(request.paymentAmount)
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

	return {
		reducer: (state, action) => {
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
			default: {
				return state
			}
			}
		}
	}
}
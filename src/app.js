import React, {useEffect, useReducer} from "react"
import PropTypes from "prop-types"
import Accounting from "accounting"
import LoanSchedule from "loan-schedule.js"

import Context from "./context"
import Form from "./form"
import Reducer from "./reducer"
import Schedule from "./schedule"


const loanSchedule = new LoanSchedule({
	prodCalendar: "ru"
})


function toMoney(number) {
	return number ? Accounting.formatMoney(number, {symbol: "", format: "%s%v", thousand: " "}) : number
}

export default function App(props) {
	const currentYear = new Date().getFullYear()

	const [request, dispatch] = useReducer(Reducer, {}, () => props.storage.load())
	const schedule = loanSchedule.calculateSchedule(request)
	schedule.lastPaymentDate = schedule.payments[schedule.payments.length - 1].paymentDate
	schedule.termInYear = Math.ceil(schedule.term / 12)

	useEffect(() => props.storage.save(request), [request])

	return (
		<Context.Provider value={dispatch}>
			<div className="container">
				<Form request={request}/>

				<div className="row mt-5 text-start ps-2">
					<div className="col-9 orange">
						{toMoney(schedule.overAllInterest)} ({toMoney(schedule.fullAmount)}),
						{schedule.lastPaymentDate} (~{schedule.termInYear}Y)
					</div>
					<div className="col-3 text-end ps-2">
						<a href="#">[Reset]</a>
						<a target="_blank">[Share via TG]</a>
						<a href="#footer" id="header">[Bottom &darr;]</a>
					</div>
				</div>

				<Schedule schedule={schedule}/>

				<div className="row">
					<div className="col-12 text-end ps-2">
						<a href="#header" id="footer">[Top &uarr;]</a>
					</div>
				</div>
				<div className="row mt-5">
					<div className="col-sm-12 text-right">
						<p className="copyright">Copyright &copy; <span>{currentYear}</span> - Designed by timmson</p>
					</div>
				</div>

			</div>
		</Context.Provider>
	)
}

App.propTypes = {
	storage: PropTypes.object.isRequired
}
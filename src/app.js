import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import Form from "./form"
import Schedule from "./schedule"

import LoanSchedule from "loan-schedule.js"

const loanSchedule = new LoanSchedule({
	prodCalendar: "ru"
})

import Accounting from "accounting"

function toMoney(number) {
	return number ? Accounting.formatMoney(number, {symbol: "", format: "%s%v", thousand: " "}) : number
}

export default function App(props) {
	const currentYear = new Date().getFullYear()

	const [request/*, setRequest*/] = useState(props.storage.load())
	const schedule = loanSchedule.calculateSchedule(request)
	schedule.lastPaymentDate = schedule.payments[schedule.payments.length - 1].paymentDate
	schedule.termInYear = Math.ceil(schedule.term / 12)

	useEffect(() => props.storage.save(request), [request])

	return (
		<div className="container">
			<nav className="navbar navbar-expand-lg navbar-light bg-dark">
				<h3 style={{color: "#fd680e"}}>Loan Amortization Schedule</h3>
			</nav>

			<Form request={request}/>

			<div className="row mt-5">
				<div className="col-sm-9">
					<div style={{color: "#fd680e"}}>
						{ toMoney(schedule.overAllInterest) } ({ toMoney(schedule.fullAmount) }),
						{ schedule.lastPaymentDate } (~{ schedule.termInYear }Y)
					</div>
				</div>
				<div className="col-sm-3 text-right">
					<a href="#">[Reset]</a>
					<a target="_blank">[Share via TG]</a>
					<a href="#footer" id="header">[Bottom &darr;]</a>
				</div>
			</div>

			<Schedule schedule={schedule}/>

			<div className="row">
				<div className="col-sm-12 text-right">
					<a href="#header" id="footer">[Top &uarr;]</a>
				</div>
			</div>
			<div className="row mt-5">
				<div className="col-sm-12 text-right">
					<p className="copyright">Copyright &copy; <span>{currentYear}</span> - Designed by timmson</p>
				</div>
			</div>

		</div>
	)
}

App.propTypes = {
	storage: PropTypes.object.isRequired
}
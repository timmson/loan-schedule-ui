import React, {useContext} from "react"
import PropTypes from "prop-types"
import Context from "./context"
import {UPDATE_SCHEDULE} from "./constants"

export default function Form(props) {
	const request = props.request
	const dispatch = useContext(Context)

	const change = (element) => {
		const newRequest = {...request}
		newRequest[element.name] = element.value
		dispatch({type: UPDATE_SCHEDULE, value: newRequest})
	}

	return (
		<form className="form-horizontal">
			<div className="row mt-5 text-left">
				<div className="col-sm-3 pt-2">
					<label htmlFor="amount">Loan amount, $</label>
				</div>
				<div className="col-sm-3">
					<input className="form-control" name="amount"
						   value={request.amount} onChange={(event) => change(event.target)}/>
				</div>
				<div className="col-sm-3 pt-2">
					<label htmlFor="paymentAmount">Payment amount, $</label>
				</div>
				<div className="col-sm-3">
					<input className="form-control" name="paymentAmount" placeholder="Payment amount"
						   value={request.paymentAmount} onChange={(event) => change(event.target)}/>
				</div>
			</div>
			<div className="row mt-2 text-left">
				<div className="col-sm-3 pt-2">
					<label htmlFor="term">Term, months</label>
				</div>
				<div className="col-sm-3">
					<input className="form-control" name="term" placeholder="Term, months" type="number"
						   value={request.term} onChange={(event) => change(event.target)}/>
				</div>
				<div className="col-sm-3 pt-2">
					<label htmlFor="issueDate">Issue date</label>
				</div>
				<div className="col-sm-3">
					<input className="form-control" name="issueDate" placeholder="dd.mm.yyyy" type="text"
						   value={request.issueDate} onChange={(event) => change(event.target)}/>
				</div>
			</div>
			<div className="row mt-2 text-left">
				<div className="col-sm-3 pt-2">
					<label htmlFor="rate">Annual rate, %</label>
				</div>
				<div className="col-sm-3">
					<input className="form-control" name="rate" placeholder="Annual rate, %" type="number" step="0.01"
						   value={request.rate} onChange={(event) => change(event.target)}/>
				</div>
				<div className="col-sm-3 pt-2">
					<label htmlFor="paymentOnDay">Payment on day</label>
				</div>
				<div className="col-sm-3">
					<input className="form-control" name="paymentOnDay" max="28" min="0" placeholder="Payment on day" type="number"
						   value={request.paymentOnDay} onChange={(event) => change(event.target)}/>
				</div>
			</div>
			<div className="row mt-2 text-left border-top border-bottom border-2 border-dark pt-2 pb-2">
				<div className="col-sm-3 pt-2">
					<label htmlFor="earlyRepaymentDate">Early repayment date</label>
				</div>
				<div className="col-sm-3">
					<input className="form-control" placeholder="dd.mm.yyyy" type="text" id="earlyRepaymentDate"
						   value={request.earlyRepayment.date} onChange={(event) => change(event.target)}/>
				</div>
				<div className="col-sm-3 pt-2">
					<label htmlFor="earlyRepaymentAmount">Early repayment amount, $</label>
				</div>
				<div className="col-sm-3">
					<input className="form-control" placeholder="Early rep. amount" id="earlyRepaymentAmount"
						   value={request.earlyRepayment.amount} onChange={(event) => change(event.target)}/>
				</div>
			</div>
		</form>
	)
}

Form.propTypes = {
	request: PropTypes.object.isRequired
}
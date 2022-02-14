import React from "react"
import PropTypes from "prop-types"
import Field from "./field"

export default function Form(props) {
	const request = props.request

	return (
		<form className="form-horizontal">
			<div className="row mt-5 text-left">
				<Field name={"amount"} value={(request.amount)} description={"Loan amount, $"}/>
				<Field name={"paymentAmount"} value={(request.paymentAmount)} description={"Payment amount, $"} placeholder="Payment amount"/>
			</div>
			<div className="row mt-2 text-left">
				<Field name={"term"} value={request.term} description={"Term, months"} type="number"/>
				<Field name={"issueDate"} value={request.issueDate} description={"Issue date"} placeholder="dd.mm.yyyy"/>
			</div>
			<div className="row mt-2 text-left">
				<Field name={"rate"} value={request.rate} description={"Annual rate, %"} type="number" step="0.01"/>
				<Field name={"paymentOnDay"} value={request.paymentOnDay} description={"Payment on day"} min="0" max="28"/>
			</div>
			<div className="row mt-2 text-left border-top border-bottom border-2 border-dark pt-2 pb-2">
				<Field name={"earlyRepaymentDate"} value={""} description={"Early repayment date"} placeholder="dd.mm.yyyy" type="text"/>
				<Field name={"earlyRepaymentAmount"} value={""} description={"Early rep. amount"} placeholder="10 000.00" type="money"/>
			</div>
		</form>
	)
}

Form.propTypes = {
	request: PropTypes.object.isRequired
}
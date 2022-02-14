import React, {useContext} from "react"
import PropTypes from "prop-types"
import {UPDATE_SCHEDULE} from "./constants"

import Context from "./context"
import Field from "./field"

export default function Form(props) {
	const request = props.request
	const dispatch = useContext(Context)

	const change = (element) => {
		dispatch({type: UPDATE_SCHEDULE, name: element.name, value: element.value})
	}

	return (
		<form className="form-horizontal" onChange={(event) => change(event.target)}>
			<div className="row mt-5 text-left">
				<Field name={"amount"} value={request.amount} description={"Loan amount, $"}/>
				<Field name={"paymentAmount"} value={request.paymentAmount} description={"Payment amount, $"} placeholder="Payment amount"/>
			</div>
			<div className="row mt-2 text-left">
				<Field name={"term"} value={request.term} description={"Term, months"} type="number"/>
				<Field name={"issueDate"} value={request.issueDate} description={"Issue date"}/>
			</div>
			<div className="row mt-2 text-left">
				<Field name={"rate"} value={request.rate} description={"Annual rate, %"} type="number" step="0.01"/>
				<Field name={"paymentOnDay"} value={request.paymentOnDay} description={"Payment on day"} min="0" max="28"/>
			</div>
			<div className="row mt-2 text-left border-top border-bottom border-2 border-dark pt-2 pb-2">
				<Field name={"earlyRepaymentDate"} value={""} description={"Early repayment date"} placeholder="dd.mm.yyyy" type="text"/>
				<Field name={"earlyRepaymentAmount"} value={""} description={"Early rep. amount"} type="text"/>
			</div>
		</form>
	)
}

Form.propTypes = {
	request: PropTypes.object.isRequired
}
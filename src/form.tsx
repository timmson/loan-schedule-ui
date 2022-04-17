import React, {useContext} from "react"
import Field from "./field"
import {CHANGE_FORM, UPDATE_SCHEDULE} from "./constants"
import Context from "./context"
import {RequestType} from "./types"

type FormProps = {
	request: RequestType
}

export default function Form(props: FormProps) {
	const request = props.request

	const dispatch = useContext(Context)
	const change = (element) => dispatch({
		type: CHANGE_FORM,
		name: element.name,
		value: element.value
	})

	const submit = () => dispatch({type: UPDATE_SCHEDULE})

	return (
		<form className="form-horizontal" onBlur={() => submit()}>
			<div className="row mt-2 text-left">
				<Field name={"amount"} value={(request.amount)} description={"Loan amount, $"} onChange={(event) => change(event.target)}/>
				<Field name={"paymentAmount"} value={(request.paymentAmount)} description={"Payment amount, $"} placeholder="Payment amount" onChange={(event) => change(event.target)}/>
			</div>
			<div className="row mt-2 text-left">
				<Field name={"term"} value={request.term.toString()} description={"Term, months"} type="number" onChange={(event) => change(event.target)}/>
				<Field name={"issueDate"} value={request.issueDate} description={"Issue date"} placeholder="dd.mm.yyyy" onChange={(event) => change(event.target)}/>
			</div>
			<div className="row mt-2 text-left border-bottom border-2 border-dark pb-2">
				<Field name={"rate"} value={request.rate} description={"Annual rate, %"} type="number" step="0.01" onChange={(event) => change(event.target)}/>
				<Field name={"paymentOnDay"} value={request.paymentOnDay.toString()} description={"Payment on day"} min="0" max="28" onChange={(event) => change(event.target)}/>
			</div>
		</form>
	)
}

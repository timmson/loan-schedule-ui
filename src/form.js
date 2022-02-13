import React, {useState} from "react"
import PropTypes from "prop-types"

export default function Form(props) {
	let [request, setRequest] = useState(props.request)

	const change = (element) => {
		console.log(request[element.name] + " -> " + element.value)
		const newRequest = {...request}
		newRequest[element.name] = element.value
		setRequest(newRequest)
	}

	return (
		<form >
			<div className="row mt-5 text-left">
				<div className="col-sm-3 pt-2">
					<label htmlFor="amount">Loan amount, $</label>
				</div>
				<div className="col-sm-3">
					<input className="form-control" name="amount" value={request.amount} onChange={(event) => change(event.target)}/>
				</div>
				<div className="col-sm-3 pt-2">
					<label htmlFor="paymentAmount">Payment amount, $</label>
				</div>
				<div className="col-sm-3">
					<input className="form-control" name="paymentAmount" placeholder="Payment amount" value={request.paymentAmount} onChange={(event) => change(event.target)}/>
				</div>
			</div>
		</form>
	)
}

Form.propTypes = {
	request: PropTypes.object.isRequired
}

/*<form class="form-horizontal" role="form" @change="updateSchedule">
	<div class="row mt-5 text-left">
		<div class="col-sm-3 pt-2">
			<label for="amount">Loan amount, $</label>
		</div>
		<div class="col-sm-3">
			<input class="form-control" id="amount" v-model="request.amount"/>
		</div>
		<div class="col-sm-3 pt-2">
			<label for="paymentAmount">Payment amount, $</label>
		</div>
		<div class="col-sm-3">
			<input class="form-control" id="paymentAmount" placeholder="Payment amount" v-model="request.paymentAmount">
		</div>
	</div>
	<div class="row mt-2 text-left">
		<div class="col-sm-3 pt-2">
			<label for="term">Term, months</label>
		</div>
		<div class="col-sm-3">
			<input class="form-control" id="term" placeholder="Term, months" type="number" v-model="request.term">
		</div>
		<div class="col-sm-3 pt-2">
			<label for="issueDate">Issue date</label>
		</div>
		<div class="col-sm-3">
			<input class="form-control" id="issueDate" placeholder="dd.mm.yyyy" type="text" v-model="request.issueDate">
		</div>
	</div>
	<div class="row mt-2 text-left">
		<div class="col-sm-3 pt-2">
			<label for="rate">Annual rate, %</label>
		</div>
		<div class="col-sm-3">
			<input class="form-control" id="rate" placeholder="Annual rate, %" type="number" step="0.01"
				   v-model="request.rate">
		</div>
		<div class="col-sm-3 pt-2">
			<label for="paymentOnDay">Payment on day</label>
		</div>
		<div class="col-sm-3">
			<input class="form-control" id="paymentOnDay" max="28" min="0" placeholder="Payment on day" type="number"
				   v-model="request.paymentOnDay">
		</div>
	</div>
	<hr/>
	<div class="row mt-2 text-left">
		<div class="col-sm-3 pt-2">
			<label for="earlyRepaymentDate">Early repayment date</label>
		</div>
		<div class="col-sm-3">
			<input class="form-control" placeholder="dd.mm.yyyy" type="text" id="earlyRepaymentDate"
				   v-model="earlyRepayment.date">
		</div>
		<div class="col-sm-3 pt-2">
			<label for="earlyRepaymentAmount">Early repayment amount, $</label>
		</div>
		<div class="col-sm-3">
			<input class="form-control" placeholder="Early rep. amount" id="earlyRepaymentAmount"
				   v-model="earlyRepayment.amount">
		</div>
	</div>
</form>*/

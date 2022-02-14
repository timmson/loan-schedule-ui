import React from "react"
import PropTypes from "prop-types"
import {toM} from "./money"

export default function Payment(props) {
	const pay = props.payment
	
	return (
		<tr className="pays" /*v-for="(pay,i) in schedule.payments"
			v-bind:style="{color: ((parseInt(pay.principalAmount) > 0) && (parseInt(pay.interestAmount) === 0)) ? '#fd680e' : ''}"*/>
			{/*			<td v-if="i === 0">{pay.paymentDate}</td>
			<td v-else><a style="cursor:pointer;" v-on:click="copyPayment($event, i)">{pay.paymentDate}</a></td>*/}
			<td>{pay.paymentDate}</td>
			<td>{toM(pay.initialBalance)}</td>
			<td>{toM(pay.paymentAmount)}</td>
			<td>{toM(pay.annuityPaymentAmount)}</td>
			<td>{toM(pay.principalAmount)}</td>
			<td>{toM(pay.interestAmount)}</td>
			<td>{toM(pay.finalBalance)}</td>
		</tr>
	)
}

Payment.propTypes = {
	payment: PropTypes.object.isRequired
}
import React from "react"
import PropTypes from "prop-types"
import Accounting from "accounting"

function toMoney(number) {
	return number ? Accounting.formatMoney(number, {symbol: "", format: "%s%v", thousand: " "}) : number
}

export default function Payment(props) {
	const pay = props.payment
	
	return (
		<tr className="pays" /*v-for="(pay,i) in schedule.payments"
			v-bind:style="{color: ((parseInt(pay.principalAmount) > 0) && (parseInt(pay.interestAmount) === 0)) ? '#fd680e' : ''}"*/>
			{/*			<td v-if="i === 0">{pay.paymentDate}</td>
			<td v-else><a style="cursor:pointer;" v-on:click="copyPayment($event, i)">{pay.paymentDate}</a></td>*/}
			<td>{pay.paymentDate}</td>
			<td>{toMoney(pay.initialBalance)}</td>
			<td>{toMoney(pay.paymentAmount)}</td>
			<td>{toMoney(pay.annuityPaymentAmount)}</td>
			<td>{toMoney(pay.principalAmount)}</td>
			<td>{toMoney(pay.interestAmount)}</td>
			<td>{toMoney(pay.finalBalance)}</td>
		</tr>
	)
}

Payment.propTypes = {
	payment: PropTypes.object.isRequired
}
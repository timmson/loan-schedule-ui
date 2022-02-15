import React, {useContext} from "react"
import PropTypes from "prop-types"
import {toM} from "./money"
import {CUT_SCHEDULE} from "./constants"
import Context from "./context"

export default function Payment(props) {
	const pay = props.payment
	const paymentClass = ((parseInt(pay.principalAmount) > 0) && (parseInt(pay.interestAmount) === 0)) ? "orange" : ""

	const dispatch = useContext(Context)
	const cutSchedule = () => dispatch({
		type: CUT_SCHEDULE,
		amount: pay.finalBalance,
		issueDate: pay.paymentDate,
		term: pay.remainingTerm
	}
	)

	return (
		<tr className={paymentClass}>
			<td style={{cursor: "pointer"}} onClick={() => cutSchedule()}>{pay.paymentDate}</td>
			<td className={"desktop-cell"}>{toM(pay.initialBalance)}</td>
			<td>{toM(pay.paymentAmount)}</td>
			<td className={"desktop-cell"}>{toM(pay.annuityPaymentAmount)}</td>
			<td className={"desktop-cell"}>{toM(pay.principalAmount)}</td>
			<td>{toM(pay.interestAmount)}</td>
			<td>{toM(pay.finalBalance)}</td>
		</tr>
	)
}

Payment.propTypes = {
	payment: PropTypes.object.isRequired
}
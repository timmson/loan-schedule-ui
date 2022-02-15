import React, {useContext} from "react"
import PropTypes from "prop-types"
import {toM} from "./money"
import {CUT_SCHEDULE, DELETE_EARLY} from "./constants"
import Context from "./context"

export default function Payment(props) {
	const pay = props.payment

	const dispatch = useContext(Context)
	const cutSchedule = () => dispatch({
		type: CUT_SCHEDULE,
		amount: pay.finalBalance,
		issueDate: pay.paymentDate,
		term: pay.remainingTerm
	}
	)

	const deleteEarly = () => dispatch({
		type: DELETE_EARLY,
		date: pay.paymentDate
	})

	return (
		<tr className={pay.isEarly ? "orange" : ""} style={{cursor: "pointer"}} onClick={() => pay.isEarly ? deleteEarly() : cutSchedule()}>
			<td>{pay.paymentDate}</td>
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
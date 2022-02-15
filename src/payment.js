import React from "react"
import PropTypes from "prop-types"
import {toM} from "./money"

export default function Payment(props) {
	const pay = props.payment

	return (
		<>
			<tr className={pay.isEarly ? "orange" : ""} style={{cursor: "pointer"}} onClick={(event) => props.onClick ? props.onClick(event) : null}>
				<td>{pay.paymentDate}</td>
				<td>{toM(pay.paymentAmount)}</td>
				<td className={"desktop-cell"}>{toM(pay.annuityPaymentAmount)}</td>
				<td className={"desktop-cell"}>{toM(pay.principalAmount)}</td>
				<td>{toM(pay.interestAmount)}</td>
				<td>{toM(pay.finalBalance)}</td>
			</tr>
		</>
	)
}

Payment.propTypes = {
	payment: PropTypes.object.isRequired,
	onClick: PropTypes.func
}
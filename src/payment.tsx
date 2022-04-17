import React from "react"
import {toM} from "./money"
import {PaymentType} from "./types"

type PaymentProps = {
	payment: PaymentType
	onClick: (event) => void
}

export default function Payment(props: PaymentProps) {
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
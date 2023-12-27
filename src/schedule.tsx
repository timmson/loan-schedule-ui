import React, {useContext, useState} from "react"

import {toM} from "./money"
import Payment from "./payment"
import Context from "./context"
import {ADD_EARLY, DELETE_EARLY} from "./constants"
import Field from "./field"
import EarlyModal from "./early-modal"
import {ScheduleType} from "./types"

type ScheduleProps = {
	schedule: ScheduleType
}

export default function Schedule(props: ScheduleProps) {
	const schedule = props.schedule

	const isEarly = (payment) => ((parseInt(payment.principalAmount) > 0) && (parseInt(payment.interestAmount) === 0))

	const initialState = {showAddDialog: false, showDeleteDialog: false, date: "", amount: ""}
	const dispatch = useContext(Context)
	const [early, setEarly] = useState(initialState)

	const callback = (pay) => {
		const isEarlyPayment = isEarly(pay)
		setEarly({
			...early,
			date: pay.paymentDate,
			amount: isEarlyPayment ? pay.amount : "",
			showAddDialog: !isEarlyPayment,
			showDeleteDialog: isEarlyPayment
		})
	}

	const addEarly = () => {
		dispatch({...early, type: ADD_EARLY})
		setEarly(initialState)
	}

	const deleteEarly = () => {
		dispatch({type: DELETE_EARLY, date: early.date})
		setEarly(initialState)
	}
	const change = (element) => {
		setEarly({...early, [element.name]: element.value})
	}

	const closeDialog = () => {
		setEarly({...early, showAddDialog: false, showDeleteDialog: false})
	}

	return (
		<div className="row">
			<div className="col-sm-12 text-center">
				<EarlyModal name="Add Early Repayment?" show={early.showAddDialog} ok={{name: "Add", action: () => addEarly()}}
					close={{name: "Close", action: () => closeDialog()}}>
					<div className="container">
						<div className="row text-left">
							<form className="form-horizontal">
								<Field name={"date"} value={early.date} description={"Date"} type="text" placeholder="dd.mm.yyyy"
									   onChange={(event) => change(event.target)}/>
								<Field name={"amount"} value={early.amount} description={"Amount"} onChange={(event) => change(event.target)}/>
							</form>
						</div>
					</div>
				</EarlyModal>

				<EarlyModal name="Remove Early Repayment?" show={early.showDeleteDialog} ok={{name: "Remove", action: () => deleteEarly()}}
					close={{name: "Close", action: () => closeDialog()}}>
					<p>Remove Early Repayment?</p>
				</EarlyModal>

				<table className="table table-hover table-bordered w-100 border-dark">
					<thead className="table-secondary">
						<tr className={"desktop"}>
							<th rowSpan={2}>Дата</th>
							<th rowSpan={2}>Платеж, ₽</th>
							<th rowSpan={2}>Мин. платеж, ₽</th>
							<th colSpan={2}>включая</th>
							<th rowSpan={2}>Остаток, ₽</th>
						</tr>
						<tr className={"desktop"}>
							<th>Тело долга, $</th>
							<th>Проценты, $</th>
						</tr>
						<tr className={"mobile"}>
							<th>Дата</th>
							<th>Платеж, $</th>
							<th>Проценты, $</th>
							<th>Остаток, $</th>
						</tr>
					</thead>
					<tbody>
						{
							schedule.payments.map((payment, i) =>
								<Payment key={i} payment={{
									...payment,
									isEarly: isEarly(payment),
									remainingTerm: schedule.term - i + 1
								}} onClick={() => callback(payment)}
								/>
							)
						}
					</tbody>
					<tfoot>
						<tr>
							<td>&nbsp;</td>
							<td>{toM(schedule.fullAmount)}</td>
							<td className={"desktop-cell"}>&nbsp;</td>
							<td className={"desktop-cell"}>{toM(schedule.amount)}</td>
							<td>{toM(schedule.overAllInterest)}</td>
							<td>&nbsp;</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	)
}

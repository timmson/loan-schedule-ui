import React from "react"
import PropTypes from "prop-types"

import {toM} from "./money"
import Payment from "./payment"

export default function Schedule(props) {
	const schedule = props.schedule

	return (
		<div className="row">
			<div className="col-sm-12 text-center">
				<table className="table-bordered w-100">
					<thead>
						<tr className={"desktop"}>
							<th rowSpan="2">Date</th>
							<th rowSpan="2">Initial balance, $</th>
							<th rowSpan="2">Payment, $</th>
							<th rowSpan="2">Min. payment , $</th>
							<th colSpan="2">Inc.</th>
							<th rowSpan="2">Final balance , $</th>
						</tr>
						<tr className={"desktop"}>
							<th>Principal, $</th>
							<th>Interest, $</th>
						</tr>
						<tr className={"mobile"}>
							<th>Date</th>
							<th>Payment, $</th>
							<th>Interest, $</th>
							<th>Final balance , $</th>
						</tr>
					</thead>
					<tbody>
						{schedule.payments.map((payment, i) => <Payment key={i} payment={payment}/>)}
					</tbody>
					<tfoot>
						<tr>
							<td>&nbsp;</td>
							<td className={"desktop-cell"}>&nbsp;</td>
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

Schedule.propTypes = {
	schedule: PropTypes.object.isRequired
}
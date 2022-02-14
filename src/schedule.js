import React from "react"
import PropTypes from "prop-types"

import {toM} from "./money"
import Payment from "./payment"

export default function Schedule(props) {
	const  schedule = props.schedule

	return (
		<div className="row">
			<div className="col-sm-12 text-center">
				<table className="table-bordered w-100">
					<thead>
						<tr>
							<th rowSpan="2">Date</th>
							<th rowSpan="2">Initial balance, $</th>
							<th rowSpan="2">Payment, $</th>
							<th rowSpan="2">Min. payment , $</th>
							<th colSpan="2">Inc.</th>
							<th rowSpan="2">Final balance , $</th>
						</tr>
						<tr>
							<th>Principal, $</th>
							<th>Interest, $</th>
						</tr>
					</thead>
					<tbody>
						{schedule.payments.map((payment,i) => <Payment key={i} payment = {payment}/>)}
					</tbody>
					<tfoot>
						<tr className="pays">
							<td>&nbsp;</td>
							<td>&nbsp;</td>
							<td>{toM(schedule.fullAmount)}</td>
							<td>&nbsp;</td>
							<td>{toM(schedule.amount)}</td>
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
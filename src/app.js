import React, {useEffect, useReducer} from "react"
import PropTypes from "prop-types"

import Context from "./context"
import Form from "./form"
import {toM} from "./money"
import Reducer from "./reducer"
import Schedule from "./schedule"
import {UPDATE_SCHEDULE} from "./constants"

export default function App(props) {
	const currentYear = new Date().getFullYear()

	const request = props.storage.load()
	const [state, dispatch] = useReducer(Reducer, {}, () => Reducer({request: request}, {type: UPDATE_SCHEDULE}))

	useEffect(() => props.storage.save(state.request), [state.request])

	return (
		<Context.Provider value={dispatch}>
			<div className="container">
				<Form request={state.request}/>

				<div className="row mt-5 text-start ps-2">
					<div className="col-9 orange">
						{toM(state.schedule.overAllInterest)} ({toM(state.schedule.fullAmount)}),
						{state.schedule.lastPaymentDate} (~{state.schedule.termInYear}Y)
					</div>
					<div className="col-3 text-end ps-2">
						<a href="#">[Reset]</a>
						<a target="_blank">[Share via TG]</a>
						<a href="#footer" id="header">[Bottom &darr;]</a>
					</div>
				</div>

				<Schedule schedule={state.schedule}/>

				<div className="row">
					<div className="col-12 text-end ps-2">
						<a href="#header" id="footer">[Top &uarr;]</a>
					</div>
				</div>
				<div className="row mt-5">
					<div className="col-sm-12 text-right">
						<p className="copyright">Copyright &copy; <span>{currentYear}</span> - Designed by timmson</p>
					</div>
				</div>

			</div>
		</Context.Provider>
	)
}

App.propTypes = {
	storage: PropTypes.object.isRequired
}
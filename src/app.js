import React, {useReducer} from "react"
import PropTypes from "prop-types"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowAltCircleDown, faArrowAltCircleUp} from "@fortawesome/free-regular-svg-icons"

import {INIT, SET_DEFAULT} from "./constants"
import Context from "./context"
import Form from "./form"
import Schedule from "./schedule"

export default function App(props) {
	const [state, dispatch] = useReducer(props.reducer, {}, () => props.reducer({}, {type: INIT}))
	const reset = () => dispatch({type: SET_DEFAULT})

	return (
		<Context.Provider value={dispatch}>
			<Form request={state.request}/>

			<div className="row text-start mt-1 orange border-bottom border-2 border-dark pb-2">
				<div className="col-sm-4 orange">
					<b>Overall %</b>: {state.schedule.overAllInterest}
				</div>
				<div className="col-sm-4 orange">
					<b>Full amount, $</b>: {state.schedule.fullAmount}
				</div>
				<div className="col-sm-4 orange">
					<b>Last payment</b>: {state.schedule.lastPaymentDate} (~{state.schedule.termInYear} years)
				</div>
			</div>
			<div className="row text-end mt-1">
				<div className="col">
					<a href="#" onClick={() => reset()}>[Reset]</a>
					<a href="#footer" id="header">[Bottom <FontAwesomeIcon icon={faArrowAltCircleDown}/>]</a>
				</div>
			</div>

			<Schedule schedule={state.schedule}/>

			<div className="row">
				<div className="col-12 text-end ps-2">
					<a href="#header" id="footer">[Top <FontAwesomeIcon icon={faArrowAltCircleUp}/>]</a>
				</div>
			</div>
		</Context.Provider>
	)
}

App.propTypes = {
	reducer: PropTypes.func.isRequired
}
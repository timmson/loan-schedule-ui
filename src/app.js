import React, {useEffect, useReducer} from "react"
import PropTypes from "prop-types"
import {faTelegram} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import Context from "./context"
import Form from "./form"
import {toM} from "./money"
import Reducer from "./reducer"
import Schedule from "./schedule"
import {UPDATE_SCHEDULE} from "./constants"
import {faArrowAltCircleDown, faArrowAltCircleUp} from "@fortawesome/free-regular-svg-icons"

const shareUrl = () => {
	window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}`, "blank")
}


export default function App(props) {
	const currentYear = new Date().getFullYear()

	const request = props.storage.load()
	const [state, dispatch] = useReducer(Reducer, {}, () => Reducer({request: request}, {type: UPDATE_SCHEDULE}))

	useEffect(() => props.storage.save(state.request), [state.request])

	return (
		<Context.Provider value={dispatch}>
			<div className="container">
				<Form request={state.request}/>

				<div className="row text-start mt-1">
					<div className="col orange">
						{toM(state.schedule.overAllInterest)} ({toM(state.schedule.fullAmount)}),
						{state.schedule.lastPaymentDate} (~{state.schedule.termInYear}Y)
					</div>
				</div>
				<div className="row text-end mt-1">
					<div className="col">
						<a href="#">[Reset]</a>
						<a href="#footer" id="header">[Bottom <FontAwesomeIcon icon={faArrowAltCircleDown}/>]</a>
					</div>
				</div>

				<Schedule schedule={state.schedule}/>

				<div className="row">
					<div className="col-12 text-end ps-2">
						<a href="#header" id="footer">[Top <FontAwesomeIcon icon={faArrowAltCircleUp}/>]</a>
					</div>
				</div>
				<div className="row mt-5">
					<div className="col text-end">
						<a href="#" target="_blank" onClick={() => shareUrl()}>
							[Share via <FontAwesomeIcon icon={faTelegram}/>]
						</a>
						<p className="copyright">&copy; {currentYear} timmson</p>
					</div>
					<div className="col-sm-1">&nbsp;</div>
				</div>
			</div>
		</Context.Provider>
	)
}

App.propTypes = {
	storage: PropTypes.object.isRequired
}
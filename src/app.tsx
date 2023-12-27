import React, {useReducer} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowAltCircleDown, faArrowAltCircleUp} from "@fortawesome/free-regular-svg-icons"

import {INIT, SET_DEFAULT} from "./constants"
import Context from "./context"
import Form from "./form"
import Schedule from "./schedule"
import {ActionType, StateType} from "./types"

type AppProps = {
	reducer: (state: StateType, action: ActionType) => StateType
}

export default function App(props: AppProps) {
	const [state, dispatch] = useReducer(props.reducer, {}, () => props.reducer({}, {type: INIT}))
	const reset = () => dispatch({type: SET_DEFAULT})

	return (
		<Context.Provider value={dispatch}>
			<Form request={state.request}/>
			<div className="row text-start mt-1 orange border-bottom border-2 border-dark pb-2">
				<div className="col-lg-4 orange">
					<b>Переплата, ₽</b>: {state.schedule.overAllInterest}
				</div>
				<div className="col-lg-4 orange">
					<b>Полная стоимость, ₽</b>: {state.schedule.fullAmount}
				</div>
				<div className="col-lg-4 orange">
					<b>Последний платеж</b>: {state.schedule.lastPaymentDate} (~{state.schedule.termInYear} год(а)/лет)
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

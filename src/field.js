import React, {useContext} from "react"
import PropTypes from "prop-types"
import Context from "./context"
import {CHANGE_FORM, UPDATE_SCHEDULE} from "./constants"
import {fromM, toM} from "./money"


export default function Field(props) {
	const dispatch = useContext(Context)

	const change = (element) => dispatch({
		type: CHANGE_FORM,
		name: element.name,
		value: props.type === "money" ? fromM(element.value) : element.value
	})

	const submit = () => dispatch({type: UPDATE_SCHEDULE})

	return (
		<>
			<div className="col-sm-3 pt-2">
				<label htmlFor={props.name}>{props.description}</label>
			</div>
			<div className="col-sm-3">
				<input className="form-control"
					   name={props.name}
					   value={props.type === "money" ? toM(props.value) : props.value}
					   placeholder={props.placeholder}
					   type={props.type}
					   min={props.min}
					   max={props.max}
					   step={props.step}
					   onChange={(event) => change(event.target)}
					   onBlur={() => submit()}
				/>
			</div>
		</>
	)
}

Field.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	step: PropTypes.string,
	min: PropTypes.string,
	max: PropTypes.string
}
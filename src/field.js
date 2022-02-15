import React from "react"
import PropTypes from "prop-types"

export default function Field(props) {

	return (
		<>
			<div className="col-sm-3 pt-2">
				<label htmlFor={props.name}>{props.description}</label>
			</div>
			<div className="col-sm-3">
				<input className="form-control"
					   name={props.name}
					   value={props.value}
					   placeholder={props.placeholder}
					   type={props.type}
					   min={props.min}
					   max={props.max}
					   step={props.step}
					   onChange={(event) => props.onChange ? props.onChange(event) : null}
				/>
			</div>
		</>
	)
}

Field.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.any,
	description: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	step: PropTypes.string,
	min: PropTypes.string,
	max: PropTypes.string,
	onChange: PropTypes.func
}
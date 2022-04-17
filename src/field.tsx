import React from "react"

type FieldProps = {
	name: string,
	value: string,
	description: string,
	placeholder?: string,
	type?: string,
	step?: string,
	min?: string,
	max?: string,
	onChange?: (event) => void
}

export default function Field(props: FieldProps) {

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

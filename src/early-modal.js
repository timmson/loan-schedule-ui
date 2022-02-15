import React from "react"
import PropTypes from "prop-types"
import {Button, Modal} from "react-bootstrap"

export default function EarlyModal(props) {
	return (
		<Modal show={props.show}>
			<Modal.Header closeButton onClick={() => props.close.action()}>
				<Modal.Title>{props.name}</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				{props.children}
			</Modal.Body>

			<Modal.Footer>
				<Button variant="secondary" onClick={() => props.close.action()}>{props.close.name}</Button>
				<Button style={{background: "#fd680e", border: "#fd680e"}} onClick={() => props.ok.action()}>{props.ok.name}</Button>
			</Modal.Footer>
		</Modal>
	)
}

EarlyModal.propTypes = {
	show: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	ok: PropTypes.object.isRequired,
	close: PropTypes.object.isRequired,
	children: PropTypes.any
}


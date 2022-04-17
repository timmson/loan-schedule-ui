import React from "react"
import {Button, Modal} from "react-bootstrap"

type EarlyModalProps = {
    show: boolean,
    name: string,
    ok: {
        name: string
        action: () => void
    },
    close: {
        name: string
        action: () => void
    },
    children: React.ReactNode
}

export default function EarlyModal(props: EarlyModalProps) {
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


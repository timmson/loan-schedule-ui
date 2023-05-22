import React from "react"

import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "regenerator-runtime"

import EarlyModal from "../src/early-modal"

const okButton = "ok"
const closeButton = "close"

describe("EarlyModal should", () => {


	test("ok by clicking 'Ok' button", async () => {
		render(
			<EarlyModal name={"name"} show={true} ok={{name: okButton, action: () => expect(true).toBeTruthy()}}
						close={{name: closeButton, action: () => expect(false).toBeTruthy()}}>
				X
			</EarlyModal>
		)

		await userEvent.click(screen.getByText(okButton))

		expect.assertions(1)
	})


	test("close by clicking 'Close' button", async () => {
		render(
			<EarlyModal name={"name"} show={true} ok={{name: "ok", action: () => expect(false).toBeTruthy()}} close={{name: closeButton, action: () => expect(true).toBeTruthy()}}>
				X
			</EarlyModal>
		)

		await userEvent.click(screen.getByText(closeButton))

		expect.assertions(1)
	})

	test("close by clicking 'cross'", async () => {
		render(
			<EarlyModal name={"name"} show={true} ok={{name: "ok", action: () => expect(false).toBeTruthy()}} close={{name: closeButton, action: () => expect(true).toBeTruthy()}}>
				X
			</EarlyModal>
		)

		await userEvent.click(screen.getByRole("button", {name: "Close"}))

		expect.assertions(1)
	})

})

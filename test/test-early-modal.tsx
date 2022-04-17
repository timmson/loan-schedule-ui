import React from "react"
import renderer from "react-test-renderer"
import EarlyModal from "../src/early-modal"

describe("EarlyModal should", () => {

	let component = null

	beforeAll(() => {
		component = renderer.create(<EarlyModal
			name={"name"} show={true}
			ok={{name: "ok", action: () => null}}
			close={{name: "close", action: () => null}}
		>X</EarlyModal>
		)
	})

	/*	test("trigger close button", () => {
		expect(component.toJSON()).toMatchSnapshot()
	})*/

	test("equal to snapshot", () => {
		expect(component.toJSON()).toMatchSnapshot()
	})

	afterAll(() => component.unmount())

})
import React from "react"
import renderer from "react-test-renderer"
import EarlyModal from "../src/early-modal"

describe("EarlyModal should", () => {

	let component = null

	const createComponent = () => renderer.create(
		<EarlyModal name={"name"} show={true} ok={{name: "ok", action: () => null}} close={{name: "close", action: () => null}}>
            X
		</EarlyModal>
	)

	/*	test("trigger close button", () => {
		component = createComponent()
		
		act(() =>
			component.root.			
		)
	})*/

	test("equal to snapshot", () => {
		component = createComponent()

		expect(component.toJSON()).toMatchSnapshot()
	})

})
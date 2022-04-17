import React from "react"
import renderer, {act} from "react-test-renderer"
import Context from "../src/context"

import Schedule from "../src/schedule"

describe("Schedule should", () => {

	let component = null
	const dispatch = () => {}
	const schedule = {
		payments: [
			{
				principalAmount: "1",
				interestAmount: "0"
			}
		]
	}

	beforeAll(() => {
		component = renderer.create(
			<Context.Provider value={dispatch}>
				<Schedule schedule={schedule}/>
			</Context.Provider>
		)
	})

	test("trigger click", () => {
		act(() =>
			component.root.findByType("tbody").children[0].props.onClick()
		)

		component.toJSON()
	})

	test("equal to snapshot", () => {
		expect(component.toJSON()).toMatchSnapshot()
	})

	afterAll(() => component.unmount())

})
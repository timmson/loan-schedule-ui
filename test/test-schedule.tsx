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

	const createComponent = (schedule, dispatch) => renderer.create(
		<Context.Provider value={dispatch}>
			<Schedule schedule={schedule}/>
		</Context.Provider>
	)

	test("trigger click", () => {
		component = createComponent(schedule, dispatch)

		act(() =>
			component.root.findByType("tbody").children[0].props.onClick()
		)

		//component.toJSON()
	})

	test("equal to snapshot", () => {
		component = createComponent(schedule, dispatch)

		expect(component.toJSON()).toMatchSnapshot()
	})

})
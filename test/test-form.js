import React from "react"
import renderer from "react-test-renderer"
import Context from "../src/context"
import {CHANGE_FORM, UPDATE_SCHEDULE} from "../src/constants"

import Form from "../src/form"

describe("Form should", () => {

	let component = null

	const createComponent = (request, dispatch) => renderer.create(
		<Context.Provider value={dispatch}>
			<Form request={request}/>
		</Context.Provider>
	)

	test("trigger blur", () => {
		const dispatch = (action) => expect(action).toEqual({type: UPDATE_SCHEDULE})
		component = createComponent({}, dispatch)

		component.root.findByType("form").props.onBlur()

		expect.assertions(1)
	})

	const tc = [
		{name: "amount", value: "value"},
		{name: "paymentAmount", value: "value"},
		{name: "term", value: "value"},
		{name: "issueDate", value: "value"},
		{name: "rate", value: "value"},
		{name: "paymentOnDay", value: "value"}
	]
	tc.forEach((t) =>
		test(`trigger change of ${t.name} with value=${t.value}`, () => {
			const expectedAction = {type: CHANGE_FORM, name: t.name, value: t.value}
			const dispatch = (action) => expect(action).toEqual(expectedAction)
			component = createComponent({}, dispatch)

			const event = {target: {name: t.name, value: t.value}}
			component.root.findByProps({"name": t.name}).props.onChange(event)

			expect.assertions(1)
		})
	)


	test("equal to snapshot", () => {
		component = createComponent({}, () => null)
		expect(component.toJSON()).toMatchSnapshot()
	})

	afterAll(() => {
		component.unmount()
	})

})
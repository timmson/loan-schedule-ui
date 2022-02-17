import React from "react"
import renderer from "react-test-renderer"
import Field from "../src/field"

describe("Field should", () => {

	let component = null

	beforeAll(() => {
		component = renderer.create(
			<Field
				name={"name"}
				description={"value"}
				value={"value"}
				onChange={(event) => event}
			>X</Field>
		)
	})

	test("trigger change", () => {
		const  expected = 1

		const result = component.root.findByType("input").props.onChange(expected)

		expect(result).toEqual(expected)
	})

	test("equal to snapshot", () => {
		expect(component.toJSON()).toMatchSnapshot()
	})

	afterAll(() => component.unmount())

})
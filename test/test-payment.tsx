import React from "react"
import renderer from "react-test-renderer"
import Payment from "../src/payment"


describe("Payment should", () => {

	let component = null
	const payment = {
		paymentDate: "25.10.2012"
	}

	beforeAll(() => {
		component = renderer.create(<Payment payment={payment} onClick={(event) => event}/>)
	})

	test("trigger click", () => {
		const expected = 1

		const onClickResult =  component.root.findByType("tr").props.onClick(expected)

		expect(onClickResult).toEqual(expected)
	})

	test("equal to snapshot", () => {
		expect(component.toJSON()).toMatchSnapshot()
	})

	afterAll(() => component.unmount())

})
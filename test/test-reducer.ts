import Reducer from "../src/reducer"
import {ADD_EARLY, CHANGE_FORM, DELETE_EARLY, INIT, SET_DEFAULT, UPDATE_SCHEDULE} from "../src/constants"

const defaultSchedule = {
	payments: [
		{
			paymentDate: "30.01.2022"
		}

	]
}
const storage = {
	load: () => ({
		amount: 2000,
		paymentAmount: undefined
	}),
	save: () => expect(true).toBeTruthy(),
	reset: () => expect(true).toBeTruthy()
}

const loanSchedule = {
	calculateSchedule: () => defaultSchedule
}

describe("Reducer should", () => {

	const reducer = Reducer(storage, loanSchedule)

	test("init", () => {
		const expected = {request: {amount: "2 000.00", paymentAmount: undefined}, schedule: defaultSchedule}
		const actual = reducer({}, {type: INIT})
		expect(actual).toEqual(expected)
		expect.assertions(2)
	})

	test("set default", () => {
		const expected = {request: {amount: "2 000.00", paymentAmount: undefined}, schedule: defaultSchedule}
		const actual = reducer({}, {type: SET_DEFAULT})
		expect(actual).toEqual(expected)
		expect.assertions(3)
	})

	test("update schedule", () => {
		const expected = {request: {amount: "2 000.00", paymentAmount: undefined}, schedule: defaultSchedule}
		const actual = reducer({request: expected.request}, {type: UPDATE_SCHEDULE})
		expect(actual).toEqual(expected)
		expect.assertions(2)
	})

	test("change form", () => {
		const expected = {request: {amount: "300", term: 200}}
		const actual = reducer({request: {amount: "100", term: 200}}, {type: CHANGE_FORM, name: "amount", value: "300"})
		expect(actual).toEqual(expected)
	})

	test("add early", () => {
		const expected = {request: {earlyRepayment: {"10.11.2021": {}}}, schedule: defaultSchedule}
		const actual = reducer({request: expected.request}, {type: ADD_EARLY, date: "10.11.2021", amount: "1000"})
		expect(actual).toEqual(expected)
		expect.assertions(2)
	})

	test("delete early", () => {
		const expected = {request: {earlyRepayment: {"10.11.2021": {}}}, schedule: defaultSchedule}
		const actual = reducer({request: expected.request}, {type: DELETE_EARLY, date: "10.11.2021"})
		expect(actual.request.earlyRepayment["10.11.2021"]).toBeUndefined()
		expect.assertions(2)
	})


	test("default", () => {
		const expected = {request: {amount: "300", term: 200}}
		const actual = reducer(expected, {type: "any"})
		expect(actual).toEqual(expected)

	})

})


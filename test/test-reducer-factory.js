import ReducerFactory from "../src/reducer-factory"
import {CHANGE_FORM} from "../src/constants"

describe("Reducer should", () => {

	const reducer = ReducerFactory({}, {}).reducer

	test("change form", () => {
		const actual = reducer({request: {amount: 100, term: 200}}, {type: CHANGE_FORM, name: "amount", value: 300})
		expect(actual).toEqual({request: {amount: 300, term: 200}})
	})

	/**
	 * Add test for UPDATE_SCHEDULE
	 */

})


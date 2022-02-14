import Reducer from "../src/reducer"
import {CHANGE_FORM} from "../src/constants"

describe("Reducer should", () => {

	test("update form", () => {
		const actual = Reducer({request: {amount: 100, term: 200}}, {type: CHANGE_FORM, name: "amount", value: 300})
		expect(actual).toEqual({request: {amount: 300, term: 200}})
	})

	/**
	 * Add test for UPDATE_SCHEDULE
	 */

})


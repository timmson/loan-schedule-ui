import Reducer from "../src/reducer"
import {UPDATE_SCHEDULE} from "../src/constants"

describe("Reducer should", () => {

	test("update request", () => {
		const actual = Reducer({amount: 100, term: 200}, {type: UPDATE_SCHEDULE, name: "amount", value: 300})
		expect(actual).toEqual({amount: 300, term: 200})
	})

})


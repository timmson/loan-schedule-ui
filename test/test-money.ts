import {fromM, toM} from "../src/money"

describe("Money should", () => {

	test("convert 1111.11 to '1 111.11'", () => {
		const actual = toM(1111.11)
		expect(actual).toEqual("1 111.11")
	})

	test("convert '1 1 111,11' to '11111.11'", () => {
		const actual = fromM("1 1 111,11")
		expect(actual).toEqual("11111.11")
	})

})


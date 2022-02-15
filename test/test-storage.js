import Storage from "../src/storage";

describe("Storage should", () => {

	const location = {
		href: "https://sample.org"
	}

	test("load default request", () => {
		const expected = {
			"amount": 2000000,
			"earlyRepayment": {},
			"issueDate": new Intl.DateTimeFormat("ru").format(new Date()),
			"paymentAmount": "",
			"paymentOnDay": 1,
			"rate": 9.5,
			"scheduleType": "ANNUITY",
			"term": 240
		}
		const storage = Storage({
			localStorage: {
				getItem: () => expect(true).toBeTruthy()
			},
			location: {...location}
		})

		const actual = storage.load()

		expect(actual).toEqual(expected)
		expect.assertions(7)
	})

	test("save request", () => {
		const arrange = {
			"amount": 2000000,
			"earlyRepayment": {},
			"issueDate": new Intl.DateTimeFormat("ru").format(new Date()),
			"paymentAmount": "",
			"paymentOnDay": 1,
			"rate": 9.5,
			"scheduleType": "ANNUITY",
			"term": 240
		}

		const storage = Storage({
			localStorage: {
				setItem: () => expect(true).toBeTruthy()
			},
			location: {...location},
			history: {
				replaceState: (data, name, url) => {
					expect(name).toEqual("Loan Amortization Schedule")
					expect(url).toEqual("?amount=2000000&rate=9.5&term=240&paymentAmount=&issueDate=15.02.2022&paymentOnDay=1")
				}
			}
		})

		storage.save(arrange)

		expect.assertions(9)
	})

	test("reset request", () => {
		const storage = Storage({
			localStorage: {
				clear: () => expect(true).toBeTruthy()
			},
			location: {...location},
			history: {
				replaceState: (data, name, url) => {
					expect(name).toEqual("Loan Amortization Schedule")
					expect(url).toEqual("?")
				}
			}
		})

		storage.reset()

		expect.assertions(3)
	})

})
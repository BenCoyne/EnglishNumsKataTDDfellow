const toEnglishNumber = require("./englishNumber.js");

describe("toEnglishNumber", () => {
	it("coverts 0 to zero", () => {
		let number = 0;
		let englishNumber = toEnglishNumber(number);
		let expected = "zero";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});

	it("convers 1 to one", () => {
		let number = 1;
		let englishNumber = toEnglishNumber(number);
		let expected = "one";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});
});

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

	it("convers 2 to two", () => {
		let number = 2;
		let englishNumber = toEnglishNumber(number);
		let expected = "two";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});

	it("convers 3 to three", () => {
		let number = 3;
		let englishNumber = toEnglishNumber(number);
		let expected = "three";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});

	it("convers 4 to four", () => {
		let number = 4;
		let englishNumber = toEnglishNumber(number);
		let expected = "four";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});

	it("convers 5 to five", () => {
		let number = 5;
		let englishNumber = toEnglishNumber(number);
		let expected = "five";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});
});

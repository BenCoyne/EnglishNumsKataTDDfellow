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

	it("convers 6 to six", () => {
		let number = 6;
		let englishNumber = toEnglishNumber(number);
		let expected = "six";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});

	it("convers 7 to seven", () => {
		let number = 7;
		let englishNumber = toEnglishNumber(number);
		let expected = "seven";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});

	it("convers 8 to eight", () => {
		let number = 8;
		let englishNumber = toEnglishNumber(number);
		let expected = "eight";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});

	it("convers 9 to nine", () => {
		let number = 9;
		let englishNumber = toEnglishNumber(number);
		let expected = "nine";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});
});

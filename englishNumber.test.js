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

	it("converts 10 to ten", () => {
		let number = 10;
		let englishNumber = toEnglishNumber(number);
		let expected = "ten";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});

	it("converts 11 to eleven", () => {
		let number = 11;
		let englishNumber = toEnglishNumber(number);
		let expected = "eleven";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});

	it("converts 12 to twelve", () => {
		let number = 12;
		let englishNumber = toEnglishNumber(number);
		let expected = "twelve";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});

	it("converts 13 to thirteen", () => {
		let number = 13;
		let englishNumber = toEnglishNumber(number);
		let expected = "thirteen";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});

	it("converts 14 to fourteen", () => {
		let number = 14;
		let englishNumber = toEnglishNumber(number);
		let expected = "fourteen";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});

	it("converts 15 to fifteen", () => {
		let number = 15;
		let englishNumber = toEnglishNumber(number);
		let expected = "fifteen";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});

	it("converts 16 to sixteen", () => {
		let number = 16;
		let englishNumber = toEnglishNumber(number);
		let expected = "sixteen";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});

	it("converts 17 to seventeen", () => {
		let number = 17;
		let englishNumber = toEnglishNumber(number);
		let expected = "seventeen";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});

	it("converts 18 to eighteen", () => {
		let number = 18;
		let englishNumber = toEnglishNumber(number);
		let expected = "eighteen";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});

	it("converts 19 to nineteen", () => {
		let number = 19;
		let englishNumber = toEnglishNumber(number);
		let expected = "nineteen";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});

	it("converts 23 to twenty-three", () => {
		let number = 23;
		let englishNumber = toEnglishNumber(number);
		let expected = "twenty-three";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});

	it("converts 27 to twenty-seven", () => {
		let number = 27;
		let englishNumber = toEnglishNumber(number);
		let expected = "twenty-seven";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});

	it("converts 42 to forty-two", () => {
		let number = 42;
		let englishNumber = toEnglishNumber(number);
		let expected = "forty-two";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});

	it("converts 39 to thirty-nine", () => {
		let number = 39;
		let englishNumber = toEnglishNumber(number);
		let expected = "thirty-nine";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});

	it("converts 55 to fifty-five", () => {
		let number = 55;
		let englishNumber = toEnglishNumber(number);
		let expected = "fifty-five";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});

	it("converts 66 to sixty-six", () => {
		let number = 66;
		let englishNumber = toEnglishNumber(number);
		let expected = "sixty-six";
		expect(englishNumber).toEqual(expected, "englishNumber");
	});
});

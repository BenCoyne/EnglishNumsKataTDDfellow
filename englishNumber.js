const simpleNumbers = [
	"zero",
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
	"nine",

	"ten",
	"eleven",
	"twelve",
	"thirteen",
	"fourteen",
	"fifteen",
	"sixteen",
	"seventeen",
	"eighteen",
	"nineteen",
];

const tens = [
	"",
	"",
	"twenty",
	"thirty",
	"forty",
	"fifty",
	"sixty",
	"seventy",
	"eighty",
	"ninety",
];

const convertTens = (digit) => {
	return tens[digit];
};

const toEnglishNumber = (number) => {
	if (number >= 20) {
		let firstDigit = Math.floor(number / 10);
		let lastDigit = number % 10;
		let firstPart = convertTens(firstDigit);

		let secondPart = toEnglishNumber(lastDigit);
		return firstPart + "-" + secondPart;
	}
	return simpleNumbers[number];
};

module.exports = toEnglishNumber;

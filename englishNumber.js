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

const toEnglishNumber = (number) => {
	if (number >= 20) {
		let firstDigit = Math.floor(number / 10);
		let lastDigit = number % 10;
		let firstPart;
		if (firstDigit === 2) {
			firstPart = "twenty";
		} else if (firstDigit === 3) {
			firstPart = "thirty";
		} else if (firstDigit === 4) {
			firstPart = "forty";
		}
		let secondPart = toEnglishNumber(lastDigit);
		return firstPart + "-" + secondPart;
	}
	return simpleNumbers[number];
};

module.exports = toEnglishNumber;

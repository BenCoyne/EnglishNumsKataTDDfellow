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
		if (Math.floor(number / 10) === 2) {
			return "twenty-" + toEnglishNumber(number % 10);
		}

		return "forty-" + toEnglishNumber(number % 10);
	}
	return simpleNumbers[number];
};

module.exports = toEnglishNumber;

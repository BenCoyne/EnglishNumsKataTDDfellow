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
		return "twenty-three";
	}
	return simpleNumbers[number];
};

module.exports = toEnglishNumber;

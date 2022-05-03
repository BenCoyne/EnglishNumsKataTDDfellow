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
];

const toEnglishNumber = (number) => {
	return simpleNumbers[number];
};

module.exports = toEnglishNumber;

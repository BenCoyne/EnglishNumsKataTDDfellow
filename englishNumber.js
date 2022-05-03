const singleDigits = [
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
];

const toEnglishNumber = (number) => {
	return singleDigits[number];
};

module.exports = toEnglishNumber;

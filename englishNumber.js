const toEnglishNumber = (number) => {
	if (number === 1) {
		return "one";
	}
	return "zero";
};

module.exports = toEnglishNumber;

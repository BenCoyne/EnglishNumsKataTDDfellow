const toEnglishNumber = (number) => {
	if (number === 1) {
		return "one";
	}

	if (number === 2) {
		return "two";
	}
	return "zero";
};

module.exports = toEnglishNumber;

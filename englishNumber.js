const toEnglishNumber = (number) => {
	if (number === 1) {
		return "one";
	}

	if (number === 2) {
		return "two";
	}

	if (number === 3) {
		return "three";
	}

	if (number === 4) {
		return "four";
	}

	return "zero";
};

module.exports = toEnglishNumber;

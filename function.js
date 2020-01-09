const addOne = function(numbers) {
	// Schrijf hier de functie...
	return numbers.map(number => number + 1);
};

/* module.exports = addOne; */

const getWordLengths = function(someWords) {
	//Schrijf je functie...
	return someWords.map(word => word.length);
};

/* module.exports = getWordLengths; */

const findNeedle = function(words, wordToFind) {
	// Schrijf hier de functie...
	return words.indexOf(wordToFind);
};

module.exports = { addOne, getWordLengths, findNeedle };

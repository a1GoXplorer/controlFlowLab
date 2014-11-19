var words = ["dog", "elephant", "giraffe", "cat"]
var maxLength = 7
var newWords = []

for (i = 0; i < words.length; i += 1) {
	if (words[i].length < maxLength) {
		newWords.push(words[i]);
	}
}

console.log(newWords)
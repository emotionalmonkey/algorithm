// palindrome - a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or nurses run.
function palindrome(str) {
	// remove special characters and blank
	str = str.replace(" ", "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"?]/g, ""); 
	let strArray = str.split(" ");
	str = strArray.join("");	
	let len = str.length;
	if (len == 1) {
		console.log("NOT Palindrome");
		return;
	}	
	if (len == 2) {
		if (len[0] != len[1]) {
			console.log("NOT Palindrome");
		} else
			console.log("Yayyy Palindrome!!!");
		return;
	}
	let half = len / 2;
	firstArray = str.slice(0, half);
	secondArray = str.slice(len % 2 == 0 ? half : half + 1);
	for (let i = 0; i < firstArray.length; i++) {
		if (firstArray[i].toUpperCase() != secondArray[secondArray.length - i - 1].toUpperCase()) {
			console.log("NOT Palindrome");
			return;
		}
	}
	console.log("Yayyy Palindrome!!!");
}

palindrome("no lemon, no melon");
palindrome("Eva, can I see bees in a cave?");
palindrome("repaper");

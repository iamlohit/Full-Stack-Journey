// Run this in your browser like this:
// Chrome > View > Developer > Javascript Console > Sources
// Look for ">>>" and click "Snippets" and create a new file, named index.js
// Type the following in the file and hit CMD + Enter (MAC)

var userInput = prompt("Type your tweet here: ");
var char_count = userInput.length;
var char_left = 140 - char_count;
alert("You have written " + char_count + " characters, you have " + char_left + " characters left.");

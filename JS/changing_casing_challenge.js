// Run this in your browser like this:
// Chrome > View > Developer > Javascript Console > Sources
// Look for ">>>" and click "Snippets" and create a new file, named index.js
// Type the following in the file and hit CMD + Enter (MAC)

var user_name = prompt("What is your name: ");
var first_letter = user_name.slice(0,1).toUpperCase();
var rest = user_name.slice(1,20);

alert("Hello, " + first_letter + rest);
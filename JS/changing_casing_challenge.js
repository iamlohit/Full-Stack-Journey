// Run this in your browser like this:
// Chrome > View > Developer > Javascript Console > Sources
// Look for ">>>" and click "Snippets" and create a new file, named index.js
// Type the following in the file and hit CMD + Enter (MAC)

var name = prompt("What is your name: ");
var first_letter = name.slice(0,1).toUpperCase();
var rest = name.slice(1,name.length);

alert("Hello, " + first_letter + rest);
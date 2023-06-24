// Create a Love Calculator, that takes two names as inputs, and then randomly calculates a whole number betwee 1-100, and displays that to the user.

// Run this in your browser like this:
// Chrome > View > Developer > Javascript Console > Sources
// Look for ">>>" and click "Snippets" and create a new file, named index.js
// Type the following in the file and hit CMD + Enter (MAC)

prompt("Enter your name: ") // Prompt takes input from user.
prompt("Enter your partner's name: ") // Reason to not save this is since we are not going to use it, lol.
var n = Math.random() * 100; // This gives us a value between 0 - 1(but not including 1) and multiplies it to 100. The resulting number will be between 1-99.
    n = Math.floor(n) + 1; // This function round the number to the nearest integer, we add 1 to avoid 0 and also get number between 1-100.
alert("Your love score is " + n + "%"); //This sends a pop up message to the user on browser.
// Run this in your browser like this:
// Chrome > View > Developer > Javascript Console > Sources
// Look for ">>>" and click "Snippets" and create a new file, named index.js
// Type the following in the file and hit CMD + Enter (MAC)

var dogAge = prompt("Find out how old your dog would be if they were a human \n What is the age of your dog: ");
var humanAge = (dogAge - 2) * 4 + 21;
alert("The human age of your dog is " + humanAge);

// The point of this excercise is precedence in math operations in programming in general.
// The Rule is PEMDAS in that order:
    // Parenthesis
    // Exponent
    // Multiplication
    // Division
    // Addition
    // Subtraction

// NOTE: Even if we know Exponent or Multiplication happens first, its still a good idea
    //   to use parenthesis to be clear for the reader and yourself as to what will happen first.
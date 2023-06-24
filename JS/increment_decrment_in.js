// Run this in your browser like this:
// Chrome > View > Developer > Javascript Console > Sources
// Look for ">>>" and click "Snippets" and create a new file, named index.js
// Type the following in the file and hit CMD + Enter (MAC)

// If you want to increase the value of x by 1, there are 2 ways to go about it:
var x = 5;
x = x + 1;
// or
x++;
// Both have a result of 6.

// Same goes for decrementing by 1,
x = x -1;
// or
x--;

// If you want to increase the value of x by more than 1, lets say 2, there are 2 ways again:
var x = 5;
x = x + 2;
// or
x += 2;
// Both have a result of 7.

// Same goes for decrementing by 2,
x = x - 2;
// or
x -= 2;
// Both have a result of 3.

// NOTE: See below,
var x = 3;
var y = x++;
y += 1;

// Here you would assume that the answer is 5.
    // Since x= 3, y = x +1 = 4, then y+1 = 5.

// WRONG

// Here answer would be 4,
    // Since x=3, y is assinged value of x FIRST, and then the value of x itself is increased by +1,
    // Hence by line 3, y = 3 + 1 = 4 !!!
// Post changing the type in our package.json config file, to Module(EJS from CJS), we can use the Import keyword instead of require:

import generateName from "sillyname";
var sillyName = generateName();

console.log(`EJS: My name is ${sillyName}`);

// Output
    // ➤ node sillyname-EJS.js
    // EJS: My name is Vanillaknight Hornet
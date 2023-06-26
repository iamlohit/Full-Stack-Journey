// Let's do this with another package install called Superheroes: https://www.npmjs.com/package/superheroes

// Installed the package:
    // ➤ npm i superheroes
    // added 3 packages, and audited 5 packages in 4s
    // found 0 vulnerabilities


import superheroes from "superheroes";
var name = superheroes.random();

console.log(`I am ${name}`);

// Output
    // ➤ node superheroes.js
    // I am Toxin
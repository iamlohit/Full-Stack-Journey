// Node has a bunch of modules built into it to help us create applications in a modular fashion, and not write every module from scratch.
// We can find a list of all the modules in Node here: https://nodejs.org/docs/latest-v18.x/api/

// In this module we are going to use the File system native module of Node.
// Doc: https://nodejs.org/docs/latest-v18.x/api/fs.html
// This gives us access to the files on the local file system.

const fs = require("fs"); // This is how we import a module available in node in this file. It's akin to libraries in a Programming Language to add pre build functionality.

// To perform a function from a Module is to use Methods available.

fs.writeFile("message.txt", "Hello from Node JS", (err) =>{
    if (err) throw err;
    console.log("The file has been saved!")
});

// Here we are writing a file to the local filesystem, with the name "message.txt", then the data, and then the error handler messsage incase it fails.
// If successful it should print a log message on the console, and a file should have been created.

fs.readFile("message.txt", (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Here we Asynchronously read the entire contents of a file.

// The callback is passed two arguments (err, data), where data is the contents of the file.
// If no encoding is specified, then the raw buffer is returned.

// ➤ node index.js
    // <Buffer 48 65 6c 6c 6f 20 66 72 6f 6d 20 4e 6f 64 65 20 4a 53>

// If options is a string, then it specifies the encoding:

fs.readFile("message.txt", 'utf8', (err, data) => { // Another way to call the file from current folder would be > fs.readFile("./message.txt", 'utf8',...)
    if (err) throw err;
    console.log(data);
});

// Output:
    // ➤ node index.js
    // Hello from Node JS
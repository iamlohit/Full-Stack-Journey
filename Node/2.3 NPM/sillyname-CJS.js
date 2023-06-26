// NPM - stands for - Node package manager.
// Created by github, you can get access modules that people have built for Node.
// NPM in that sense, is a community Tool library. It's open source.
// NPM comes pre-bundled with Node.

// Here we run "npm init"

    // ➤ npm init
    // This utility will walk you through creating a package.json file.
    // It only covers the most common items, and tries to guess sensible defaults.

    // See `npm help init` for definitive documentation on these fields
    // and exactly what they do.

    // Use `npm install <pkg>` afterwards to install a package and
    // save it as a dependency in the package.json file.

    // Press ^C at any time to quit.
    // package name: (2.3-npm) learning-npm
    // version: (1.0.0) 
    // description: I'm learning about NPM
    // entry point: (index.js) 
    // test command: 
    // git repository: 
    // keywords: 
    // author: Lohit Jethwani
    // license: (ISC) 
    // About to write to /Users/ljx/Git/Full-Stack-Journey/Node/2.3 NPM/package.json:

    // {
    //   "name": "learning-npm",
    //   "version": "1.0.0",
    //   "description": "I'm learning about NPM",
    //   "main": "index.js",
    //   "scripts": {
    //     "test": "echo \"Error: no test specified\" && exit 1"
    //   },
    //   "author": "Lohit Jethwani",
    //   "license": "ISC"
    // }


    // Is this OK? (yes) yes
    // This Creates a package-lock.json file.
    // This is out project configuration file.
    // We will be editing this file later, 
    // to use ECS or Ecma Script Modules to be able to use "IMPORT" keyword instead of "REQUIRE" keyword used by CJS or Common Java Script.

// Installing NPM Packages (source: https://www.npmjs.com/)
    // run "npm i sillyname" // Short for npm install
    // This downloads a node_modules folder that contains the code downloaded as part of Sillyname.
    // Sillyname is a random name generator code, created in JS.

var generateName = require('sillyname');
var sillyName = generateName();

console.log(`CJS: My name is ${sillyName}`);

// The idea here is that we do not have to write everything from scratch or "Reinvent the wheel".
// It's like using Lego's to build your application.

// Post the change to Modules Type in the Json config file, we will have to use Import instead of requrie or it would fail as below:

    // ➤ node sillyname-CJS.js 
    // file:///Users/ljx/Git/Full-Stack-Journey/Node/2.3%20NPM/sillyname-CJS.js:54
    // var generateName = require('sillyname');
    //                    ^

    // ReferenceError: require is not defined in ES module scope, you can use import instead
    // This file is being treated as an ES module because it has a '.js' file extension and '/Users/ljx/Git/Full-Stack-Journey/Node/2.3 NPM/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
    //     at file:///Users/ljx/Git/Full-Stack-Journey/Node/2.3%20NPM/sillyname-CJS.js:54:20
    //     at ModuleJob.run (node:internal/modules/esm/module_job:194:25)

    // Node.js v18.16.0
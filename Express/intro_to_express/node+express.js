// Node is powerful in itself.
    // So powerful that the IDE i am writing this on i.e. (VSCode) is built on NODE!
    // However, NODE is a runtime for JS.

// Express on the other hand is a framework.
// Express allows us to create a backend for a Web Site.
// It abstract's all the HTTP and many other modules that do not need recreating/reinventing and simplyfying our code.
// It improves readability, requires less code, and gives us the ability to add Middleware.
// & much much more.

import express from "express";
const app = express();

app.get ("/", (req, res) => {
    res.send("<h1>Welcome to my homepage!</h1>");
});

app.get ("/about", (req, res) => {
    res.send("<h1>About us</h1>");
});

app.use((req, res) => {
    res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});

// Although this can be achieved just with Node, But it would need alot more lines, involve more complexity like
// importing the URL and HTTP modules and would also lack the readability you see above.
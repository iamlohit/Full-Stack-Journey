import express from "express";
const app = express();

// Handling Requests & Responses: the GET Request
app.get("/", function(req, res){
    res.send("<h1>Hello, world!</h1>");
});
// Here we instruct that when we recieve a "GET" request at the "/" location,
// Use the request(req for short) and response(res) functions,
// Of which there are many methods available,
// and we use the res.send (the response we are sending against the GET request to "/"),
// where we send this HTML text that the browser will Render/Interpret and display to the user.



// Configure the HTTP server to listen on to port 3000
app.listen(3000, function(){
    console.log("Server started on port 3000");
});

// When we run the above, and reach out to localhost:3000
// We are presented with an error saying "Cannot GET /"
// What the browswer is telling us is that we are connected to the server, but we did not GET anything, no file to display.
// The Web Server just exists.
    // When we type in localhost:3000 , it defaults to localhost:3000/
    // The "/" is the root of the website.
    // This is true for all websites you enter in your browswer with just the Domain.
    // The "/" root needs to hold the HTML,CSS,JS that will be returned by the webserver and the user gets in touch with it.
// Load the express module (Where do you think this comes from?)
var express = require("express");
// invoke var express and store the resulting application in var app
var app = express();
// lets handle the base route "/" and respond with "Hello Express"
app.use(express.static(__dirname + "/static"));



// notice that the function is app.get(...) why do you think the function is called get?

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
// app.get('/TaskManager', function(request, response) {
//   response.render("TaskManager");
// })
// app.get('/Xgo', function(request, response) {
//   response.render("Xgo");
// })
// app.get('/Groupster', function(request, response) {
//   response.render("Groupster");
// })
// Tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})
// this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)
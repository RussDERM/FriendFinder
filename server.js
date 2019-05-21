// //////////////////////////////////
// Dependencies
// //////////////////////////////////
var express = require('express');
var path = require('path');

// //////////////////////////////////
// Express parameters
// //////////////////////////////////

var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// //////////////////////////////////
// Router Settings
// //////////////////////////////////

// require('./routing/apiRoutes')(app);
require('./app/routing/htmlRoutes.js')(app);

// //////////////////////////////////
// HEY, LISTEN!
// //////////////////////////////////

app.listen(PORT, function () {
  console.log('I can hear you on PORT: ' + PORT + ', Jon...');
});

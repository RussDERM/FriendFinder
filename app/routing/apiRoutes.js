// //////////////////////////////////////////////////////////
// This file will point our app to the correct data sources
// //////////////////////////////////////////////////////////

var friendsList = require('../data/friends')

// ///////////
// Routing ///
// ///////////


module.exports = function (app) {

  // ///////////////
  // Get request //
  // ///////////////

  app.get('/api/friends', function (req, res) {
    res.json(friendsList);
  });

  // ///////
  // Post //
  // ///////

  app.post('/api/friends', function (req, res) {
    if (err) throw err;
    friendsList.push(req.body);
    res.json(true);
  })

}
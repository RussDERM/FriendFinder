var path = require('path');

module.exports = function (app) {
  // routing for home page
  app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'))
  });
  // routing for survey
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'))
  });
  // App defaults to home page
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'))
  });
};


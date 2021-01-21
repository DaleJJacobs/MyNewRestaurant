// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
    // res.send("Welcome to Chic Restaurant!");
  });

  app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
    // res.send("Welcome to Chic Restaurant Reservations!");

  });

  app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
    // res.send("Welcome to Chic Restaurant's Tables!");
  });
};

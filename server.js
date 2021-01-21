// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");
// var reservationData = require("../data/tableData");
// var waitListData = require("../data/waitinglistData");

var app = express();

var PORT = process.env.PORT || 8080;

// app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/rest_images'));
// app.use(express.static(path.join(__dirname, '/public')))


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

// module.exports = reservationArray;
// module.exports = waitlistArray;

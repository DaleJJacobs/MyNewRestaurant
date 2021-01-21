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


// Data
// ===========================================================







// Routes
// ===========================================================

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



// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

// module.exports = reservationArray;
// module.exports = waitlistArray;

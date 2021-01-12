// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");
// var reservationData = require("../data/tableData");
// var waitListData = require("../data/waitinglistData");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static('public'));

// Data
// ===========================================================
var reservationArray = [
    {
        name: "Yohan Sebastian",
        pnumber: "123 - 456 - 7899",
        email: "YSebastian@somewhere.com",
        guests: 2
    }];

var waitlistArray = [
    {
        name: "Kevin Simkins",
        pnumber: "123 - 456 - 7799",
        email: "KSimkins@somewhere.com",
        guets: 4
    }];

app.get("/api/tables", function (req, res) {
    return res.json(reservationArray);
});

app.get("/api/tables", function (req, res) {
    return res.json(waitlistArray);
});


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

app.post("/api/reserve", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (reservationArray.length < 5) {
        reservationArray.push(req.body);
        res.json(true);
    }
    else {
        waitlistArray.push(req.body);
        res.json(false);
    }
});
app.post("/api/clear", function (req, res) {
    // Empty out the arrays of data
    reservationArray.length = 0;
    waitlistArray.length = 0;

    res.json({ ok: true });
});

// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

// module.exports = reservationArray;
// module.exports = waitlistArray;

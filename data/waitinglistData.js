// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var waitlistArray = [
  {
    name: "Kevin Simkins",
    pnumber: "123 - 456 - 7799",
    email: "KSimkins@somewhere.com",
    guests: 4
  }];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = waitlistArray;

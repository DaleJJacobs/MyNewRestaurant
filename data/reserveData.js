// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var reservationArray = [
    {
        name: "Yohan Sebastian",
        pnumber: "123 - 456 - 7899",
        email: "YSebastian@somewhere.com",
        guests: 2
    }];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = reservationArray;
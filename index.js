function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("This is a named function.");
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function.");
    };
}

// Function to return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// Function to return the last two drivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// Array containing the two driver functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function to create a fare multiplier
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

// Fare doubler function
const fareDoubler = createFareMultiplier(2);

// Fare tripler function
const fareTripler = createFareMultiplier(3);

// Function to select different drivers
function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
}

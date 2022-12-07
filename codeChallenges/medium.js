var goodDrivingRecord = true;
var age = 24;
if (goodDrivingRecord === true && age > 25) {
    console.log("They get a discount on the car rental");
} else if (goodDrivingRecord === true || age > 25) {
    console.log("They should pay full price");
} else if (goodDrivingRecord === false && age <= 25) {
    console.log("They need to have someone else sign for the rental");
}
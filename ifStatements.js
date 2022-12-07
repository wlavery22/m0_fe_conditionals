// In the below exercises, write code that achieves
// the desired result. To check your work, run this
// file by entering the following command in your Terminal
// (while navigated to the codeChallenges directory):
// `node ifStatements.js`

// Example: Using the weather variable below, write code that decides 
// what you should take with you based on the following conditions:
  // if it is sunny, print "sunscreen"
  // if it is rainy, print "umbrella"
  // if it is snowy, print "coat"
  // if it is icy, print "yak traks"

var weather = "sunny"

if (weather === "sunny") {
  console.log("sunscreen");
} else if (weather === "rainy") {
  console.log("umbrella");
} else if (weather === "snowy") {
  console.log("coat");
} else if (weather === "icy") {
  console.log("yak traks");
} else {
  console.log("good to go!");
}

// Experiment with manipulating the value held in variable 'weather'
// to print something other than 'coat'
weather = "hot"
if (weather === "hot") {
  console.log("water bottle");
}

weather = "very snowy"
if (weather === "very snowy") {
  console.log("boots");
}

// ##################
// Using the numQuarters variable defined below, determine
// if you have enough money to buy a gumball. A gumball costs
// two quarters.

if (numQuarters <2) {
  console.log("I don't have enough money for a gumball");
}

// Right now, the program will print
// out both "I have enough money for a gumball" and
// "I don't have enough money for a gumball". Write a 
// conditional statement that prints only one or the other.

if (numQuarters >= 2) {
  console.log("I have enough money for a gumball");
} else {
  console.log("I don't have enough money for a gumball");
}

// Experiment with manipulating the value held within numQuarters
// to make sure both conditions can be achieved.

var numQuarters = 0

numQuarters = 2

if (numQuarters >= 2) {
  console.log("I have enough money for a gumball");
}

console.log("I have enough money for a gumball");
console.log("I don't have enough money for a gumball");


// #####################
// Using the variables defined below, write code that will tell you
// if you have the ingredients to make a pizza. A pizza requires 
// at least two cups of flour and sauce.

// You should be able to change the variables to achieve the following outconsole.log();
// If cupsOfFlour = 1 and hasSauce = true, print "I cannot make pizza"
// If cupsOfFlour = 5 and hasSauce = false, print "I cannot make pizza"
// If cupsOfFlour = 2 and hasSauce = true, print "I can make pizza"
// If cupsOfFlour = 3 and hasSauce = true, print "I can make pizza"

// Experiment with manipulating the value held within both variables
// to make sure all above conditions output what you expect.

var cupsOfFlour = 1;
var hasSauce = true;

if (cupsOfFlour === 1 && hasSauce === true) {
console.log("I cannot make pizza");
}
cupsOfFlour = 5
hasSauce = false
if (cupsOfFlour === 5 && hasSauce === false) {
  console.log("I cannot make pizza");
}
cupsOfFlour = 2
hasSauce = true 
if (cupsOfFlour >=2 && hasSauce === true) {
  console.log("I can make pizza");
}
cupsOfFlour = 3
if (cupsOfFlour === 3 && hasSauce === true) {
  console.log("I can make pizza");
}
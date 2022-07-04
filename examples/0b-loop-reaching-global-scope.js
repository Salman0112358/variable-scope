"use strict";

console.log("Start of programme");

const fruitArr = ['apple', 'grape', 'pear'];
const stringSeparator = '-- PLUS --';

console.log("Entering my loop:");

for (let fruit of fruitArr) { // fruitArr is part of the global scope 
  console.log(fruit);
  console.log(stringSeparator); //global scope reference 
}

console.log("Exited my loop!")

console.log("Reached the end of my programme!");
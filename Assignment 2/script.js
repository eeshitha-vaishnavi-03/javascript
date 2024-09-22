"use strict";
//////////////////### Introduction to Arrays, Creating, Accessing - Arrays, Methods in Arrays
let fruits = ["Strawberry","Avocado","Pineapple","Watermelon"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log(fruits[2]); 
console.log(fruits.length);


////////////////### Operations: Add, Remove - push(), pop(), unshift(), shift() Methods in Arrays

const friends=["Micheal","Steven","Peter"];
console.log(friends);

//Add Elements
const newLength=friends.push("Eeshu","Vaishu");
console.log(newLength);
console.log(friends);

//Remove elements
friends.pop();
console.log(friends);

//unshift()
friends.unshift("Kumar","Maha");
console.log(friends);

//shift()
friends.shift();
console.log(friends);


////////////Introduction to Objects: Creating Objects with its Properties, Accessing Properties with dot (.) & square bracket [] representations, Appending New Properties to the Existing Objects using dot & bracket representations
const jonasObject={
  fullName: "Eeshitha Vaishnavi Vooda",
  age: 2024-2003,
  city: "Visakhapatnam"
};
console.log(jonasObject.fullName);
console.log(jonasObject["fullName"]);

jonasObject.Occupation="Student";
jonasObject["Hobbies"]="Reading books, Travelling";

console.log(jonasObject.Occupation);
console.log(jonasObject["Hobbies"]);


/////////////### Creating Objects with Properties & Methods, Calling Methods, Understanding about 'this' keyword, Coding Exercise in Objects Declaration, Properties & Methods Accessing
const Car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  drive() {
      console.log(`The ${this.make} ${this.model}, a ${this.year} model, is a well-known compact sedan that stands out for its reliability, fuel efficiency, and practicality.`);
  }
};
Car.drive();

const Calculator = {
  add(a, b) {
      return a + b;
  },
  subtract(a, b) {
      return a - b;
  },
  multiply(a, b) {
      return a * b;
  },
  divide(a, b) {
      if (b !== 0) {
          return a / b;
      } else {
          return "Cannot divide by zero";
      }
  }
};
console.log(Calculator.add(5, 3));    
console.log(Calculator.subtract(10, 4));
console.log(Calculator.multiply(6, 7)); 
console.log(Calculator.divide(20, 4)); 
console.log(Calculator.divide(10, 0)); 
console.log(Calculator.divide(10, 4));   



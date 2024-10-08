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


//////////////////### Iterations: For Loop, While Loop, Break & Continue Statement
const num=[1,2,3,4,5];
for(let i=0;i<num.length;i++){
  console.log(`Number: ${num[i]}`);
}

const names = ["Eeshu","Vaishu", "hanisha", "Mouni"];
let i = 0;
while (i < names.length) {
  console.log(`Name: ${names[i]}`);
  i++;
}

let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);



let arr1 = [1, 3, 2, 4, 9]; 
let i1 = 0; 

while (i1 < arr1.length) { 
    if (arr1[i1] % 2 === 0) { 
        console.log(arr1[i1]); 
        break; 
    }
    i1++; 
}

// Using continue
let jonas1 = [
  "Vaishu",
  "Eeshu",
  2021,
  ["bvxhbv", "vhbasv", "acfsf"],
  true,
  "Hahaa"
];
for (let i = 0; i < jonas1.length; i++) {
  if (typeof jonas1[i] !== 'string') continue; 
  console.log(jonas1[i], typeof jonas1[i]);    
}

// Using break
let jonas2 = [
  "Vaishu",
  "Eeshu",
  2021,
  ["bvxhbv", "vhbasv", "acfsf"],
  true,
  "gahsg"
];
for (let j = 0; j < jonas1.length; j++) {
  if (typeof jonas1[j] !== 'string') break;   
  console.log(jonas2[j], typeof jonas2[j]);   
}


////////////////### Behind The Scenes: Variable Scope - Global vs Local Variables, Hoisting: Variables, Functions

// Global variable
let globalVar = "I'm a global variable";

function testScope() {
  // Local variable
  let localVar = "I'm a local variable";
  console.log(globalVar);
  console.log(localVar);  
}

testScope();
console.log(globalVar);   
//console.log(localVar);     // Error: localVar is not defined (cannot access outside the function)


//Hoisting with var 
console.log(me);
var me="John";

//Hoisting with functions
console.log(addDecl(5,6));
console.log(addExpr(4,9));

function addDecl(a,b){
    return a+b;
}

function addExpr(a,b){
    return a+b;
}


if (conditionVar) {
  console.log("Condition with 'var' is true");
} else {
  console.log("Condition with 'var' is false");
}

var conditionVar = true;




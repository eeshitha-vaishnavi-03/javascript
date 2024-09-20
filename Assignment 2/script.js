////ASSIGNMENT 2
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


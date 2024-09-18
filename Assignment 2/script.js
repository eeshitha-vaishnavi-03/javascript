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


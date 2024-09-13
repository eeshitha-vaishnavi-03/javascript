//////Variables Declarations//////
//Create Variables
var firstName="Eeshitha";
console.log(firstName);
let lastName="Vaishnavi";
console.log(lastName);
const age=21;
console.log(age);
console.log(`My name is ${firstName} ${lastName} and Iam ${age} years old`);

//Variable Scope
// Global scope
var globalVariable = "I'm global";

function outerFunction() {
  // Local scope
  var localVariable = "I'm local";

  function innerFunction() {
    console.log(globalVariable); // Accesses global variable
    console.log(localVariable); // Accesses local variable
  }

  innerFunction();
}

outerFunction();

/////////
// Using var
function varExample() {
    if (true) {
      var varVariable = "I'm var";
    }
    console.log(varVariable); // Logs: "I'm var"
  }
  
  // Using let
  function letExample() {
    if (true) {
      let letVariable = "I'm let";
    }
    console.log(letVariable); // Error: letVariable is not defined
  }
  
  // Using const
  function constExample() {
    if (true) {
      const constVariable = "I'm const";
    }
    console.log(constVariable); // Error: constVariable is not defined
  }


//////Operators/////
//Arthemetic Operators
let a = 10;
let b = 5;
let c = 2;
let addition = (a + b) + c;
let subtraction = (a - b) - c;
let multiplication = (a * b) * c;
let division = (a / b) / c;
let modulus = (a % b) % c;
console.log("Addition: " + addition); 
console.log("Subtraction: " + subtraction);
console.log("Multiplication: " + multiplication);
console.log("Division: " + division);
console.log("Modulus: " + modulus); 

//Comparison operators
let a3 = 10;
let b3 = '10';
let c3 = 20;
console.log(a3 == b3);
console.log(a3 != c3);
console.log(a3 === b3);
console.log(a3 !== b3);
console.log(a3 < c3);
console.log(c3 > a3); 
console.log(a3 <= b3);
console.log(c3 >= b3);

//Logical operators
let x = 5;
let y = 10;
let z = 15;
console.log(x > 0 && y > 0);
console.log(x > 0 && y < 0);
console.log(x > 0 || y < 0);
console.log(x < 0 || y < 0);
console.log(!(x > 0));
console.log(!(y < 0));
console.log((x < y && z > y) || !(x == 5));


/////Data Types/////
//Primitive data types
let a1 = 42;               
let b1 = "Hello, World!";    
let c1 = true;            
let d1 = null;               
let undefinedVariable;                  

console.log("a1 Value =", a1, ", Type =", typeof a1);     
console.log("b1 Value =", b1, ", Type =", typeof b1);    
console.log("c1 Value =", c1, ", Type =", typeof c1);  
console.log("d1 Value =", d1, ", Type =", typeof d1);          
console.log("undefinedVariable: Value =", undefinedVariable, ", Type =", typeof undefinedVariable); 


//////Type Conversion and Coercion//////
//Explicit type conversion
let str = "123";    
let num = 456;      
let bool = true;  

let numFromString = Number(str);      
let strFromNum = String(num);          
let boolFromNum = Boolean(num);        
let boolFromString = Boolean(str);

console.log("Original string:", str);
console.log("Converted to number:", numFromString); 
console.log("Original number:", num);
console.log("Converted to string:", strFromNum);
console.log("Original boolean:", bool);
console.log("Converted from number to boolean:", boolFromNum);
console.log("Converted from string to boolean:", boolFromString);

//Implicit type coercion
//Arithmetic Operations
let result1 = "5" + 2;        
console.log(result1);        
let result2 = "5" - 2;      
console.log(result2);       
let result3 = "5" * "2";     
console.log(result3);        

//Comparison Operations
let compare1 = "5" == 5;  
console.log(compare1);
let compare2 = "5" === 5;
console.log(compare2);
let compare3 = "5" > 2; 
console.log(compare3); 



/////Strings and Template Literals/////
//String manipulation
let firstName1 = "Eeshitha";
let lastName1 = "Vaishnavi";
let fullName = firstName + " " + lastName; 
console.log(fullName); 

console.log(firstName[0]); 
console.log(lastName[4]); 

console.log(firstName1.length); 

let text = "JavaScript";
let part = text.substring(0, 4); 
console.log(part);  
let anotherPart = text.slice(4, 10);  
console.log(anotherPart); 

//Template literals
const name = "Alice";
const age1 = 25;
const greeting = `Hello, my name is ${name} and I am ${age1} years old.`;
console.log(greeting);  

const multiLineString =
`Hello this is Vaishnavi
and 
Iam learning JavaScript`;
console.log(multiLineString);

const num1 = 5;
const num2 = 10;
const result = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
console.log(result);  


/////Decision-Making Statements/////
//If-else statements
const a2 = 45;
const b2 = 5;
const c2 = 22;

if (a2 > b2) {
    if (a2 > c2) {
        console.log("a2 is the greatest");
    } else {
        console.log("c2 is the greatest");
    }
} else if (b2 > c2) {
    console.log("b2 is the greatest");
} else {
    console.log("c2 is the greatest");
}

//Switch statements
const day = "wednesday";

switch(day) {
    case "monday": 
        console.log("plan course structure");
        console.log("go to coding meetup");
        break;

    case "tuesday": 
    case "wednesday":
        console.log("prepare theory videos");
        break;

    case "thursday": 
    case "friday": 
        console.log("write code examples");
        break;
    
    default: 
        console.log("not a valid day!");
}


//////Use Strict/////
//Enable strict mode
"use strict"; 
let hasDriversLicense = false;
console.log(`hasDriversLicense: ${hasDriversLicense}`);

const passTest = true;
console.log(`passTest: ${passTest}`);

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I have a Driving License!`);
//Catches errors
hasDriversLicense = false;
console.log(`hasDriversLicense: ${hasDriversLicense}`);

const passTest1 = true;
console.log(`passTest: ${passTest}`);

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I have a Driving License!`);

/////Function Call and Its Definition/////
//Function declaration
function addNumbers(a, b) {
  console.log("Sum:", a + b);
}
function greetUser(greeting,name) {
  console.log(`${greeting}, ${name}!`);
}
addNumbers(5, 10);
greetUser("Hello","Alice");

//Function expression
const greet = function(name) {
  console.log(`Hello, ${name}!`);
}
greet("Alice");  


///////Passing Parameters to Functions//////
//Passing arguments
function multiply(a, b) {
  console.log(a * b);
}
multiply(5, 10);

//Default parameters
function greet1(name = "Guest", greeting1 = "Hello") {
  console.log(`${greeting1}, ${name}!`);
}
greet1("Alice", "Hi");
greet1("Bob");
greet1(); 


//////Return Statement/////
//Returning values
function add(a, b) {
  return a + b;
}
let sum = add(5, 10);
console.log(sum);

//Chaining function calls
function sum(a, b){
  return a+b;
}
function mul(a,b){
  console.log(a*b);
}
mul(sum(5,6), 7);//mul(11,7)





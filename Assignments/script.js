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




////Operators///
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


//Logical operators


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

//Object data type



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


  



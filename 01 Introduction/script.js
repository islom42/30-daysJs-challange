/* Console.log
To write our first JavaScript code, we used a built-in function console.log(). We passed an argument as input data, and the function displays the output. We passed 'Hello, World' as input data or argument in the console.log() function. */
console.log("Hello world");
//=======================
/* Console.log with Multiple Arguments
The console.log() function can take multiple parameters separated by commas. The syntax looks like as follows:console.log(param1, param2, param3) */
console.log("Javascript", "Java", "C#");
//========================
// COMMENTS
//Example: Single Line Comment

// This is the first comment  
// This is the second comment  
// I am a single line comment

/* Example: Multiline Comment
This is a multiline comment  
 Multiline comments can take multiple lines  
 JavaScript is the language of the web 
 */
//========================
console.log(2 + 3) // Addition
console.log(3 - 2) // Subtraction
console.log(2 * 3) // Multiplication
console.log(3 / 2) // Division
console.log(3 % 2) // Modulus - finding remainder
console.log(3 ** 2) // Exponentiation 3 ** 2 == 3 * 3
//=======================
/* 
Adding JavaScript to a Web Page JavaScript can be added to a web page in three different ways:
Inline script
Internal script
External script
Multiple External scripts
*/
//======================
/* Introduction to Data types
In JavaScript and also other programming languages, there are different types of data types. The following are JavaScript primitive data types: String, Number, Boolean, undefined, Null, and Symbol. + ES2020 (BigInt) */
//======================

//! Numbers
/* Integers: Integer (negative, zero and positive) numbers Example: ... -3, -2, -1, 0, 1, 2, 3 ...
Float-point numbers: Decimal number Example ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ... */

//! Strings
/* A collection of one or more characters between two single quotes, double quotes, or backticks.

Example:
'a'
'Asabeneh'
"Asabeneh"
'Finland'
'JavaScript is a beautiful programming language'
'I love teaching'
'I hope you are enjoying the first day'
`We can also create a string using a backtick`
'A string could be just as small as one character or as big as many pages'
'Any data type under a single quote, double quote or backtick is a string' */

//! Booleans
/* A boolean value is either True or False. Any comparisons returns a boolean value, which is either true or false.
A boolean data type is either a true or false value 
Example:
true // if the light is on, the value is true
false // if the light is off, the value is false */

//! Undefined
/* In JavaScript, if we don't assign a value to a variable, the value is undefined. In addition to that, if a function is not returning anything, it returns undefined.

let firstName
console.log(firstName) // undefined, because it is not assigned to a value yet */

//! Null
/* Null in JavaScript means an empty value.
let emptyValue = null */
//===================================
//! Checking Data Types
// To check the data type of a certain variable, we use the typeof operator. See the following example.
// console.log(typeof 'Asabeneh') // string
// console.log(typeof 5) // number
// console.log(typeof true) // boolean
// console.log(typeof null) // object type
// console.log(typeof undefined) // undefined
//=====================================
//! Variables
/* Variables are containers of data. Variables are used to store data in a memory location. When a variable is declared, a memory location is reserved. When a variable is assigned to a value (data), the memory space will be filled with that data. To declare a variable, we use var, let, or const keywords.

For a variable that changes at a different time, we use let. If the data does not change at all, we use const. For example, PI, country name, gravity do not change, and we can use const. We will not use var in this challenge and I don't recommend you to use it. It is error prone way of declaring variable it has lots of leak. We will talk more about var, let, and const in detail in other sections (scope). For now, the above explanation is enough. */

//! A valid JavaScript variable name must follow the following rules:
/* 
A JavaScript variable name should not begin with a number.
A JavaScript variable name does not allow special characters except dollar sign and underscore.
A JavaScript variable name follows a camelCase convention.
A JavaScript variable name should not have space between words. 

Valid names of variables in javascript
firstName
lastName
country
city
capitalCity
age
isMarried

first_name
last_name
is_married
capital_city

num1
num_1
_num_1
$num1
year2020
year_2020
*/
//=======================================
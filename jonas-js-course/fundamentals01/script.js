/************************
 * Values and Variables *
 ************************/

/*

console.log('Ronny'); // here: `Ronny` is a value which is string
console.log(23); // here: `23` is also a value which is a number in this case
console.log(2 + 8 + 10); // here: `2`, `8`, and `10` all are different values in the form of number. And, `+` is a mathematical operator which adds all values and output single value as added.

// So, the value is a piece of data, and this is the fundamental unit of javascript

let firstName = 'Jolly'; // here: we're declaring a variable named `firstName` and it's value is `Jolly`.
console.log(firstName); // now: look in the console you will get the variable value `Jolly`

// Variables are a memory to hold a data in values, expressions or as a function too. In simple word variable is a box which holds some data.
// Every javascript value is either object or primitive values.

firstName = 'Bobby'; // if: we reassigning any defined variable then we donot need to use `let` again.
console.log(firstName);

// There are few set of rules to declare variable:
// Variable can start with `$ (dollar)`, `_ (underscore)`, letters in all cases (camelcase, uppercase). But the standard way is to use `camelCase`. Variable can't start with a number, it will throw an error and also there are few predefined reserved keywords which we can't use to create a variable.
// Like variable, we can use UpperCase for Constants as a naming convention because this is a standard way.

let PI = 3.1415; // Constants can be written as Capital
let my_first_job = "DevSecOps Engineer"; // We can also use underscore as naming convention.
console.log(PI);
console.log(my_first_job);

*/

/**************
 * Data Types *
 **************/

/*

let javascriptIsFun = true; // here: we using boolean data type
console.log(javascriptIsFun); // look: this will print boolean value as `true`

console.log(typeof javascriptIsFun); // this will tell the data type is boolean because we are using `true`
console.log(typeof false); // this will also output boolean as we used `false` which is boolean data type
console.log(typeof 'Soumya'); // this will output string because we have enclosed the `Soumya` in a string.
console.log(typeof 69); // this will print number data type because we gave `69` value and it is a number.

javascriptIsFun = "YES"; // if we reassigning a variable then it will automatically adjust the corresponding value's data type 
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun); // now: this will output a `string` data type

let currentYear; // here: is an undefined variable
console.log(currentYear); // this will show `undefined`
console.log(typeof currentYear); // this will show `undefined` data type

currentYear = '2022';
console.log(currentYear); // now: it will shows the defined value which is `2021`

*/

/***********************
 * let, const, and var *
 ***********************/

/*
let age = 23; // let is used to define the variable
age = 24; // we can reassign a variable with values but without using let
console.log(age);

const birthYear = 1998; // `const` is used for constants
/// birthYear = 1999; // constants can't be reassigned
console.log(birthYear);

var programmer = true; // var is used to define a variable but this is an old way to define.
console.log(programmer);

lastName = "Sagar"; // this will accepts without declaring with var, let, and const
console.log(lastName); // but this is not a variable, it's a properties.
*/

/*******************
 * Basic Operators *
 ******************/

/*
const ageSarvagya = 2022 - 1999;
const ageSamyak = 2022 - 2000;
/// console.log(ageSamyak);
/// console.log(ageSarvagya);
console.log(ageSarvagya, ageSamyak);

// Math Operators
const currentYear = 2022;
const harisAge = currentYear - 1991; // we can also use operators w/variables
const harryAge = currentYear - 1986;
console.log(harisAge, harryAge);
console.log(harisAge * 2, harryAge / 2, 2 ** 5); // `2 ** 5` mean 2 to the power 5

let firstName = "Sarvagya";
let lastName = "Sagar";
console.log(firstName + " " + lastName); // we can also use concatenations

// Assignment Operators
let x = 10 + 5; // here is two operators `=`, `+`
x += 10; // `+=` that mean x = x + 10
x *= 2; // `*=` that means x = x * 2
x++; // `++` means increment by 1, x = x + 1
x--; // `--` means decrement by 1, x = x -1
console.log(x);

// Comparison Operators
console.log(harisAge > harryAge); // `>` this is a greater than operator always reply in true/false

// comparison operators: >, <, >=, <=

console.log(harryAge >= 21); // `>=` this means greater than or equal to
console.log(harisAge <= 28); // `<=` this means less than or equal to

let compAge = harryAge <= harisAge;
console.log(compAge); // we can also store comparison operators in variable

console.log(currentYear - 1991 > currentYear - 1986); // we can also use multi operators
*/

/***********************
 * Operator Precedence *
 ***********************/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

/*
console.log(21 - 2 >= 20 - 1); // it will give output true, and then calculate via precedence table
console.log(25 - 10 - 5); // left to right

let x, y; // we took empty variables
x = y = 25 - 15 - 5; // right to left
console.log(x, y); // observe the output

let now = 2022;
let ageKatty = now - 1990;
let ageJolly = now - 1999;
// const averageAge = ageJolly + ageJolly / 2; // here the precedence of divide is higher than add, so it will do first divide then addition which is not a right way to calculate average of two.
const averageAge = (ageJolly + ageKatty) / 2; // here is the bracket who have highest precedence.
console.log(ageJolly, ageKatty, averageAge);
*/

/*******************************
 * Strings & Template Literals *
 *******************************/

/*
const firstName = "Sarvagya";
const job = "DevSecOps Engineer";
const birthYear = 1999;
const now = 2022;

const sarvagya = "I'm " + firstName + ", a " + (now - birthYear) + " years old " + job + "!";
console.log(sarvagya);

// to call the template use `...` backticks, this feature is comes in ES6.

const sarvagyaNew = `I'm ${firstName}, a ${now - birthYear} years old ${job}!`; // here we used string literals
console.log(sarvagyaNew);
console.log(`hey, just testing template literals`); // you can also insert directly.

console.log(`this is a multi line string.
yes now we are in 2nd line,
now we are in 3rd line.`); // to create multiline string, just insert new line.
*/

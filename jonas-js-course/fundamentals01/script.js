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

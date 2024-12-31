// Used to calculate the taken time to execute a particular part of code
console.time('Your code Took');

// console.log means as a log prints it on console
console.log('Hello console');
console.log(5 + 45);
console.log(true);
console.log([30, 12, 15, 45]);

// Array of objects
var obj = [
    {
        harry: 'this',
        marks: 34
    },
    {
        harry: 'this',
        marks: 34
    }];
console.log(obj);

// Used to print in table format
console.table({ harry: 'this', marks: 34 });

// Used to through warnings
console.warn('This is a warning');

// Used to clear the console
// console.clear();

// return the time taken to execute the code between
console.timeEnd('Your code Took');

// Used to check a condition
// console.assert(500 < 189, 'Age > 189 this is not possible');

// Used to through errors
// console.error('This is an error');

/*---------------------------------------------------------------------*/
/* Variables in JavaScript */
// var, let, const are used to declare or create variables

// Var
var Name = 'abhay';
let city = "mumbai";
var channel;
var marks = 34;
console.log(Name, channel, marks);

// Let
{
    let city = "delhi"; // scope exists only between the curlly braces.
    console.log(city);
}

// Const
// variables declared using const cannot be overwritten
const ownersName = 'Hari Ram';
// ownersName = 'harry'; // this cannot be done
console.log(ownersName);

const arr1 = [15, 1, 12, 54, 63];
arr1.push(50);
// arr1 = [45, 85, 68]; // This cannot be done
console.log(arr1);

/*---------------------------------------------------------------------*/
/* Most common programming case types:
1. camalCase
2. kebab-case
3. snake_case
4. PascalCase

*/

/*---------------------------------------------------------------------*/
/* Datatypes in JavaScript
Primitive Datatypes(Stack) :- String, numbers, boolean, null, undefined, Symbol etc.
Reference Datatypes(Heap) :- Arrays, object literals, dates, functions etc.

in js default value is 'undefined'
*/

// Primitive Datatypes
// strings
_name = "Abhay";
console.log("My string is " + _name);
console.log("Data type _name is : " + (typeof _name));

// numbers
let _marks = 34;
console.log("Data type _marks is : " + (typeof _marks));

// boolean
let isDriver = true;
console.log("Data type isDriver is : " + (typeof isDriver));

// undefined
let indef = undefined;
console.log("Data type indef is : " + (typeof indef));

// Reference Data
// Arrays
let myarr = [1, 2, 3, 4];
console.log("Data type myarr is : " + (typeof myarr));

// Object Literals
let stMarks = {
    harry: 89,
    Shubham: 36,
    'Rohan Das': 34
}
console.log("Data type stMarks is : " + (typeof stMarks));

//function
function findName() {

}
console.log("Data type findName is : " + (typeof findName));

// Dates
let date = new Date();
console.log("Data type date is : " + (typeof date));

/*---------------------------------------------------------------------*/
console.log("--------------------Type conversion--------------------");
// Type conversion

let myVar;
myVar = 34;
console.log("Data type of myVar : " + typeof myVar);

myVar = String(34);
console.log("Data type of myVar : " + typeof myVar);

console.log("Data type of date : " + typeof date);
date = String(new Date());
console.log("Data type of date : " + typeof date);

console.log("Data type of myarr : " + typeof myarr);
myarr = String([1, 2, 3, 4]);
console.log("Data type of myarr : " + typeof myarr);



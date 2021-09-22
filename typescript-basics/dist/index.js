"use strict";
// Basic types in typescript
// 🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷number
let id = 5;
// 🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷string
let company = '❤';
// 🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷boolean
let isPublished = true;
// 🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷any (can be set to any data type like in dynamic typed languages)
let x = 'Something';
x = true;
// ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤ arrays
// ids array only containing numbers
let ids = [1, 2, 34, 5];
// ids.push('Hello'); // error
// arr array that can have data of any type
let arr = [1, true, 'jo'];
// ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤ Tuple - can specifiy the exact types for each of the values inside the array
// let person: [number,string,boolean] = [1,'🐱‍🚀',3]// error as the tuple defination specified that the person[2] is boolean
// let person: [number,string,boolean] = [1,true,'🐱‍🚀']; // error as person[1] must be string and person[2] must be boolean
let person = [1, '✔', false];
//❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤ Tuple array i.e arrays of tuple
let employee; // arrays of tuple
employee = [
    [1, '✔'],
    [2, '✔']
];
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦ Union - if we want one variable to hold more than one type
// a uid that can be both number & string  
let uid;
uid = 22;
uid = '💡';
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦ Enum - define a set of named constants either numeric or strings
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
// cd dist, node index.js
console.log(Direction1.Up); //1
console.log(Direction1.Down); //2
console.log(Direction1.Left); //3
console.log(Direction1.Right); //4
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up); // Up
console.log(Direction2.Down); // Down
console.log(Direction2.Left); // Left
console.log(Direction2.Right); // Right
// a user const with User type
const user = {
    id: 1,
    name: 'John'
};
// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦ Type Assertion - tells compiler that we want to treat an entity as different type
let cid = 1;
// let customerId = <number> cid 
// or
let customerId = cid;
// now customerId is a number
// customerId = true // error
customerId = 45;
// 🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠Functions
// (x: number, y: number): number
// the third number depicts function return value to be number
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// for Void(null) no return value for function
function log(message) {
    console.log(message);
}
//log(true) // error
log('Functions in typescript....');
// a user const with User type
const user1 = {
    id: 1,
    name: 'John'
};
const p1 = 1;
// 🧨🧨🧨🧨🧨🧨🧨🧨 however an interface is not possible
//interface Point1 = number | string; // error
// 🎢🎢🎢🎢🎢🎢🎢🎢🎢🎢🎢🎢Function Interfaces

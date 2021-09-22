// Basic types in typescript

// 🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷number
let id: number = 5

// 🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷string
let company: string = '❤';

// 🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷boolean
let isPublished: boolean = true

// 🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷🏷any (can be set to any data type like in dynamic typed languages)
let x: any = 'Something'
x=true;


// ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤ arrays

// ids array only containing numbers
let ids: number[] = [1,2,34,5]

// ids.push('Hello'); // error

// arr array that can have data of any type
let arr: any[] = [1,true,'jo'];

// ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤ Tuple - can specifiy the exact types for each of the values inside the array

// let person: [number,string,boolean] = [1,'🐱‍🚀',3]// error as the tuple defination specified that the person[2] is boolean
// let person: [number,string,boolean] = [1,true,'🐱‍🚀']; // error as person[1] must be string and person[2] must be boolean

let person: [number,string,boolean] = [1,'✔',false];

//❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤ Tuple array i.e arrays of tuple

let employee: [number,string][] // arrays of tuple

employee = [
    [1,'✔'],
    [2,'✔']
]

// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦ Union - if we want one variable to hold more than one type

// a uid that can be both number & string  
let uid: string | number;
uid = 22;
uid = '💡';

// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦ Enum - define a set of named constants either numeric or strings

enum Direction1 {
    Up=1,
    Down,
    Left,
    Right
}

// cd dist, node index.js
console.log(Direction1.Up); //1
console.log(Direction1.Down);//2
console.log(Direction1.Left);//3
console.log(Direction1.Right);//4

enum Direction2 {
    Up='Up',
    Down= 'Down',
    Left= 'Left',
    Right= 'Right'
}

console.log(Direction2.Up);// Up
console.log(Direction2.Down);// Down
console.log(Direction2.Left);// Left
console.log(Direction2.Right);// Right


// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦ Objects

// a User Custom Type object with two keys id and name with number and string type respectively
type User = {id: number,name: string}
// a user const with User type
const user: User = {
    id: 1,
    name: 'John'
}


// ♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦ Type Assertion - tells compiler that we want to treat an entity as different type

let cid: any = 1
// let customerId = <number> cid 
// or
let customerId = cid as number;
// now customerId is a number

// customerId = true // error
customerId = 45; 


// 🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠Functions

// (x: number, y: number): number
// the third number depicts function return value to be number
function addNum(x: number, y: number): number{
    return x+y
} 
console.log(addNum(1,2));

// for Void(null) no return value for function
function log(message: string | number): void{
    console.log(message)
}

//log(true) // error
log('Functions in typescript....');

// 🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠🌠 Interfaces
// specific/custom structure to an object or function similar usage like the custom types

// UserInterface with optional parameter age may or may not be specified
// ✨✨✨✨✨✨✨Read Only Properties of id i.e it cannot be altered
interface UserInterface  {
    readonly id: number,
    name: string,
    age?: number
}
// a user const with User type
const user1: UserInterface = {
    id: 1,
    name: 'John'
}

// user1.id = 7; // error


// 🧨🧨🧨🧨🧨🧨🧨🧨 types vs interfaces

// types can be used with unions & primitives
type Point = number | string;
const p1: Point = 1;

// 🧨🧨🧨🧨🧨🧨🧨🧨 however an interface is not possible
//interface Point1 = number | string; // error



// 🎢🎢🎢🎢🎢🎢🎢🎢🎢🎢🎢🎢Function Interfaces


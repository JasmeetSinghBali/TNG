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



// 🎢🎢🎢🎢🎢🎢🎢🎢🎢🎢🎢🎢Function Interfaces (Function with interfaces)
interface MathFunc {
    (x: number , y: number): number
}

const add: MathFunc = (x: number,y: number): number => x+y
const sub: MathFunc = (x: number,y: number): number => x-y
const mul: MathFunc = (x: number,y: number): number => x*y
const div: MathFunc = (x: number,y: number): number => x/y


// 🎢🎢🎢🎢🎢🎢🎢🎢🎢🎢🎢🎢 Classes
// public by default props & methods accesible everywhere
// private - property or method only accesible within the class
// protected - props or method accesible either withing the same class or the child class(extended class)
// other than props and constructors other methods can be declared inside class

// ✨✨✨✨✨✨✨✨we can have interface for the class
// interface are like blueprint of the classes which make the code more robust
interface PersonInterface{
    id: number,
    name: string,
    register(): string
}

class Person implements PersonInterface{
    // public by default
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
    register(){
        return `${this.name} is now registered`;
    }
}

const john = new Person(1,'JohnBaba');
const wick = new Person(2,'YagaBoo');

console.log(john,wick);

//console.log(john.id); // error as id is private

console.log(john.register());
console.log(wick.register());

// 💡💡💡💡💡💡💡💡💡💡💡💡 Extending Classes
// subclass extending the parent Person class
class Employee extends Person{
    position: string

    constructor(id: number, name: string, position: string){
        super(id,name);
        // does this for the base class
        // this.id = id;
        // this.name = name;
        this.position = position;
    }
}

const emp = new Employee(13,'JaneDoe','Developer');
console.log(emp.register());
console.log(emp.name);

// 🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳 Generics 
// USED TO BUILD REUSABLE COMPONENTS with Placeholders for different data types

// generic angle bracket T like a placeholder
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items);
}

// now suppose we want two different arrays one to be number & one to be array of strings
let numArray = getArray<number>([1,2,3,4]) // <number> replaces <T> placeholder
let strArray = getArray<string>(['john','baba','kaka']) // <string> replaces <T> placeholder


//strArray.push(1); //error



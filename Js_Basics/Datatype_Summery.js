// =====  Primitive  =====

// 7 primitive types : String, Number, Boolean, Null, Bigint, undefined, symbol

// symbol = If you want to define unique value then it is used.


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// ====  Reference (Non-Primitive) ====

// Reference = Arrays, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

// Array = Type return Function
// Object = Type return Function

const myFunction = function(){
    console.log("Hello world");
}

// Type return Function Object

console.log(typeof anotherId);



// https://262.ecma-international.org/5.1/#sec-11.4.3
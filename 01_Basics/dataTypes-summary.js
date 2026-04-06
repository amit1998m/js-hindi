//  Primitive dataType
//   7types : String,Number,Boolean,Null,undefined,symbol,BigInt

const score = 100
const scoreValue = 100.2

const isLoggedIn = false
const outsideTem = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const BigNumber = 112334425355555n
//   Reference dataTypes
//   Array,Object,Functions

const heros = ["saktiman", "Raja","salmankhan"]
let myObj = {
    name: "Amit",
    age:23,
}

const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof scoreValue);


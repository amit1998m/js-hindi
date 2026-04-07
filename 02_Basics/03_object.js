//  singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Amit",
    "full name": "Amit yadav",
    [mySym]: "mykey1", // symbol key define karna
    age: 19,
    location: "Allahabad",
    email: "amitkumar1998m@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Sunday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]); // new keyvalue ko define karne ke liye use

JsUser.email = "kumaramit22m@gmail.com" // email ko change karne ke liye
console.log(JsUser);





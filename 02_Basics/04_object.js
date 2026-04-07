const tinderUser = new Object()

tinderUser.id = "123amq"
tinderUser.name = "Amit"
tinderUser.isLoggedIn =false

// console.log(tinderUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2} // shortcut method <splite method>
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "kumaramit22m@gmail.com",
    },
       {
        id: 1,
        email: "kumaramit22m@gmail.com",
    },
       {
        id: 1,
        email: "kumaramit22m@gmail.com",
    }
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // key nikalne ke liye
console.log(Object.values(tinderUser)); // value nikalne ke liye

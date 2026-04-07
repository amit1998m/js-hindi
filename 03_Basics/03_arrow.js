const user = {
    username: "Amit",
    price: 999,
    
    welcomeMassage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
    
}

// user.welcomeMassage()
// user.username = "Rajat"
// user.welcomeMassage()

// console.log(this);

// function chai(){
//     console.log(this);
// }

// chai()

const chai = () =>{
   let username = "Amit"
   console.log(this);
}

// chai()

const addTwo = (num1,num2) => {
    return num1+num2
}

console.log(addTwo(3,6));

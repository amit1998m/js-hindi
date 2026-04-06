//   Array  

const myArr = [0 ,1 ,2 ,3 ,4 ,5]
// console.log(myArr);

// console.log(myArr.includes(11));
// console.log(myArr.indexOf(99));


 
// myArr.push(6,7) 
// console.log(myArr);


// slice , splice

console.log("A" , myArr);
const myn1 = myArr.slice(1, 3) //slice se only (1-2) print hoga
console.log(myn1);
console.log("B" , myArr);


const myn2 = myArr.splice(1, 3) //splice se (1-3) print hoga
console.log("C" , myArr);
console.log(myn2);




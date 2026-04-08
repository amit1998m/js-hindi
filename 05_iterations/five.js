const coding = ["js","ruby","java","python"]

//***************1st********************************

// coding.forEach( function (item) {
//     console.log(item);
// } )

//********************2nd**************************

// coding.forEach( (item) => {
//     console.log(item);
    
// } )

//*********************3rd*************************

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


//********************4th**********************

// coding.forEach( (item,index,arr) => {
//     console.log(item ,index,arr);
    
// } )


//*******************5th********************

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "JavaScript"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "C++",
        languageFileName: "C++"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    
})

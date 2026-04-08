// const myNums = [1,2,3,4,5,6,7]

// const newNums = myNums.filter( (num) => num >4 )
// console.log(newNums);


const books = [
    {
        title: '1', genre: 'Fiction', publish: '1998', edition: '2002'
    },
    {
        title: '2', genre: 'The Hero', publish: '1873', edition: '2003'
    },
    {
        title: '3', genre: 'Science', publish: '1988', edition: '2002'
    },
    {
        title: '4', genre: 'History', publish: '1998', edition: '2002'
    },
]

let userBooks = books.filter( (bk) => bk.genre === 'History')

console.log(userBooks);
 


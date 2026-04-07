let a = 300

if (true) {
    let a = 23
    const b = 2
    console.log("INNER :", a);
}

// console.log("OUTER :", a);


function one(){
    const username = "Amit"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()
const prompt = require('prompt-sync')({sigint: true});

let students = Number(prompt("Enter the number of students: "));
console.log(`number of students ${students}`);

let div3 = Math.floor(students/3);
console.log(`${students} divided by 3 is ${div3}`)

let oddNum = students % 3;
console.log(`modulus 3 is ${oddNum}`);

let div2 = Math.floor(students/2);
console.log(`${students} divided by 2 is ${div2}`)

let evenNum = students % 2;
console.log(`modulus 2 is ${evenNum}`);



if(students % 2 === 1){
    console.log(`create ${div3} groups of 3 and ${evenNum} groups of 2`)
} else if (students / 3 === students / 3 ){
    console.log(`create ${div3} groups of 3 and ${oddNum} of 2`)
} else if (students % 2 === 0){}


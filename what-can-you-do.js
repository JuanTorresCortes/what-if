const prompt = require('prompt-sync')({sigint: true});

let age = Number(prompt("Enter an age: "));

if(age < 16 ){
    console.log(`If your age is ${age}, You can't drive.`)
} else if(age === 16){
    console.log(`If your age is ${age}, You can drive but not vote.`)
} else if(age === 17){
    console.log(`If your age is ${age}, You can drive but not vote.`)
} else if(age >= 18 && age <= 24){
    console.log(`If your age is ${age}, You can vote but not rent a car.`)
}else{console.log(`If your age is ${age}, You can do pretty much anything.`)}

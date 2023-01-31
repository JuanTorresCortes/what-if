// Write a program that asks the user for a number.
// If the number is divisible by 3, the program logs "fizz".
// If the number is divisible by 5, log "buzz". 
// If the number is divisible by 3 and 5, log "fizzbuzz".
const prompt = require('prompt-sync')({sigint: true});

let number = Number(prompt("Enter a number: "));

if(number % 3 === 0 && number % 5 === 0){
    console.log("fizzbuzz")
}else if(number % 5 === 0){
    console.log("buzz")
}else if(number % 3 === 0){
    console.log("fizz")
}else{console.log(`${number} is not divisible by 3 or 5`)}
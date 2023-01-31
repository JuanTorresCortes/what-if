const prompt = require('prompt-sync')({sigint: true});

let number = Number(prompt("Enter a number: "));

if(number === 1 ){
    console.log(`The 1st day of the week is Monday.😢`)
}else if(number === 2){
    console.log(`The 2nd day of the week is Tuesday.`)
}else if(number === 3){
    console.log(`The 3rd day of the week is Wednesday.`)
}else if(number === 4){
    console.log(`The 4th day of the week is Thursday.`)
}else if(number === 5){
    console.log(`The 5th day of the week is Friday!!!!😁🕺.`)
}else if(number === 6){
    console.log(`The 6th day of the week is Saturday.`)
}else if(number === 7){
    console.log(`The 7th day of the week is Sunday.`)
}else{
    console.log("Error")
}
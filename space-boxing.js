const prompt = require('prompt-sync')({sigint: true});

let earthWeight = Number(prompt("Enter your weight on Earth: "));
let planet = Number(prompt("Enter a number according to planet\n (1 for Venus),\n (2 for Mars),\n (3 for Jupiter),\n (4 for Saturn),\n (5 for Uranus),\n (6 for Neptune): "));

const Venus = 0.78;
const Mars = 0.39;
const Jupiter = 2.65;
const Saturn = 1.17;
const Uranus = 1.05;
const Neptune = 1.23;

if(planet === 1){
    let spaceWeight = earthWeight*Venus;
    console.log(`Your weight on Venus is ${spaceWeight}lb.`)
}else if(planet === 2){
    let spaceWeight = earthWeight*Mars;
    console.log(`Your weight on Mars is ${spaceWeight}lb.`)
}else if(planet === 3){
    let spaceWeight = earthWeight*Jupiter;
    console.log(`Your weight on Jupiter is ${spaceWeight}lb.`)
}else if(planet === 4){
    let spaceWeight = earthWeight*Saturn;
    console.log(`Your weight on Saturn is ${spaceWeight}lb.`)
}else if(planet === 5){
    let spaceWeight = earthWeight*Uranus;
    console.log(`Your weight on Uranus is ${spaceWeight}lb.`)
}else if(planet === 6){
    let spaceWeight = earthWeight*Neptune;
    console.log(`Your weight on Neptune is ${spaceWeight}lb.`)
}
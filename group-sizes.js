const prompt = require("prompt-sync")({ sigint: true });

let students = Number(prompt("Enter class size: "));
console.log(`number of students ${students}`);

let div3 = Math.floor(students / 3);
console.log(`${students} divided by 3 is ${div3}`);

let oddNum = students % 3;
console.log(`modulus 3 is ${oddNum}`);

let div2 = Math.floor(students / 2);
console.log(`${students} divided by 2 is ${div2}`);

let evenNum = students % 2;
console.log(`modulus 2 is ${evenNum}`);

let result = div3 - oddNum;
console.log(result);

let result2 = div3 - 3;
console.log(result2);
if (students % 3 === 1) {
  console.log(`create ${result} of 3 and ${result2} groups of 2`);
} else if (students % 3 === 0) {
  console.log(`create ${div3} groups of 3 and ${oddNum} groups of 2`);
} else if (!students % 3 === 0) {
  console.log(`create ${div3} groups of 3 and ${evenNum} groups of 2`);
}

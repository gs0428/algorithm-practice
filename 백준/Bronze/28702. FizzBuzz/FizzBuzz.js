const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const numIdx = input.map(Number).findIndex((i) => !isNaN(i));
const num = +input[numIdx] + 3 - numIdx;
if (!(num % 3) && !(num % 5)) return console.log("FizzBuzz");
if (!(num % 3)) return console.log("Fizz");
if (!(num % 5)) return console.log("Buzz");
console.log(num);

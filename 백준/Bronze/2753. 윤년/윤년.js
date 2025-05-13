const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const num = +input[0];
if (num % 4 === 0 && (num % 100 !== 0 || num % 400 === 0)) {
  return console.log(1);
}
console.log(0);

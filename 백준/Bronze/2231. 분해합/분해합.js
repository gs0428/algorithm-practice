const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let target = +input[0];
const len = input[0].length;
if (len === 1) {
  if (target % 2 !== 0) return console.log(0);
  return console.log(target / 2);
}

let start = target - len * 9;

while (start < target) {
  const sum =
    start +
    start
      .toString()
      .split("")
      .reduce((acc, cur) => acc + +cur, 0);
  if (sum === target) return console.log(start);
  start++;
}
console.log(0);

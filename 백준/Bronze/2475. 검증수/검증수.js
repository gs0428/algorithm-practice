const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(
  input[0]
    .split(" ")
    .map(Number)
    .reduce((acc, num) => acc + Math.pow(num, 2), 0) % 10
);

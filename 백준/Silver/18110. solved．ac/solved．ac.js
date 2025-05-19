const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input.shift();
if (N === 0) return console.log(0);
const exclude = Math.round(N * 0.15);
const sum = input
  .sort((a, b) => +a - +b)
  .slice(exclude, N - exclude)
  .reduce((acc, cur) => acc + +cur, 0);
console.log(Math.round(sum / (N - exclude * 2)));

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const num = +input[0];
const pow1 = Math.floor(num / 5);
const pow2 = Math.floor(num / 25);
const pow3 = Math.floor(num / 125);
console.log(pow1 + pow2 + pow3);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [A, B, V] = input[0].split(" ").map(Number);
if (V === A) return console.log(1);
const days = Math.ceil((V - A) / (A - B));
console.log(days + 1);

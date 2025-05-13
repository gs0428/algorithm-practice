const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const ans = [];
const num = input.map(Number);
ans.push(num[0] + num[1] - num[2]);
ans.push(num[0].toString() + num[1].toString() - num[2]);
console.log(ans.join("\n"));

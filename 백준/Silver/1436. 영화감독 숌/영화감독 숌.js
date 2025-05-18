const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let cnt = +input[0];
let start = 666;
while (cnt > 0) {
  const str = start.toString();
  if (str.includes("666")) cnt--;
  start++;
}
console.log(start - 1);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const ans = [];
const num = +input[0];
for (let i = 1; i <= num; i++) {
  ans.push(" ".repeat(num - i) + "*".repeat(i));
}
console.log(ans.join("\n"));

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const ans = [];
input.splice(1).forEach((num) => {
  if (num === "0") ans.pop();
  else ans.push(num);
});
console.log(ans.reduce((acc, cur) => acc + +cur, 0));

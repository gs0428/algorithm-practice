const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const ans = [];
input.forEach((num) => {
  const [a, b] = num.split(" ").map(Number);
  ans.push(a + b);
});
ans.pop();
console.log(ans.join("\n"));

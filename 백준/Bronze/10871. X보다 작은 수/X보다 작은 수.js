const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const ans = [];
const [N, X] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
A.forEach((num) => {
  if (X > num) ans.push(num);
});
console.log(ans.join(" "));

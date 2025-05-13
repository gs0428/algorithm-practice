const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const ans = Array.from({ length: 10 }, () => 0);
input
  .reduce((acc, num) => acc * +num, 1)
  .toString()
  .split("")
  .forEach((num) => ans[num]++);
console.log(ans.join("\n"));

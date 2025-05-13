const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const set = new Set();
input.forEach((num) => {
  const res = +num % 42;
  set.add(res);
});
console.log(set.size);

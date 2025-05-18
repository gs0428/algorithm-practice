const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let r = 1;
const mod = 1234567891;
const sum = input[1].split("").reduce((acc, cur, idx) => {
  acc += (cur.charCodeAt() - 96) * r;
  acc %= mod;
  r *= 31;
  r %= mod;
  return acc;
}, 0);
console.log(sum);

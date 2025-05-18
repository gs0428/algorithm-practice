const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const alpabets = Array.from({ length: 26 }, (_, idx) =>
  String.fromCharCode(97 + idx)
);
const sum = input[1].split("").reduce((acc, cur, idx) => {
  const num = alpabets.indexOf(cur) + 1;
  return acc + BigInt(num) * BigInt(Math.pow(31, idx));
}, 0n);

console.log((sum % 1234567891n).toString().replace("n", ""));

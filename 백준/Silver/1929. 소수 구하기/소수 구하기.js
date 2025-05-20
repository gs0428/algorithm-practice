const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, b] = input[0].split(" ").map(Number);
const decimalArr = Array.from({ length: b + 1 }, () => true);
const ans = [];
decimalArr[0] = false;
decimalArr[1] = false;

for (let i = 2; i <= Math.sqrt(b); i++) {
  if (!decimalArr[i]) continue;
  decimalArr[i] = true;
  for (let j = i * 2; j <= b; j += i) {
    decimalArr[j] = false;
  }
}

for (let i = a; i <= b; i++) {
  if (decimalArr[i]) ans.push(i);
}

console.log(ans.join("\n"));

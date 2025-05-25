const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input[0];
const dp = Array.from({ length: n + 1 }, (_, idx) => idx);
for (let i = 1; i <= n; i++) {
  const max = Math.floor(Math.sqrt(i));
  for (let j = 1; j <= max; j++) {
    dp[i] = Math.min(dp[i], dp[i - Math.pow(j, 2)] + 1);
  }
}
console.log(dp[n]);

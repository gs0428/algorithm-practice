const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input[0];

function dp(n, memo = [0, 0]) {
  let i = 2;
  while (i <= n) {
    memo[i] = memo[i - 1] + 1;
    if (i % 3 === 0) {
      memo[i] = Math.min(memo[i], memo[i / 3] + 1);
    }
    if (i % 2 === 0) {
      memo[i] = Math.min(memo[i], memo[i / 2] + 1);
    }
    i++;
  }
  return memo[n];
}

console.log(dp(N));

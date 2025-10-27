const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];

if (N === 1) return console.log(input[1]);
if (N === 2) return console.log(Number(input[1]) + Number(input[2]));
if (N === 3)
  return console.log(
    Math.max(Number(input[1]), Number(input[2])) + Number(input[3])
  );

const dp = Array.from({ length: N }, () => 0);

dp[1] = Number(input[1]);
dp[2] = Number(input[1]) + Number(input[2]);
dp[3] = Math.max(Number(input[1]), Number(input[2])) + Number(input[3]);

for (let i = 4; i <= N; i++) {
  dp[i] =
    Math.max(dp[i - 2], dp[i - 3] + Number(input[i - 1])) + Number(input[i]);
}

console.log(dp[N]);

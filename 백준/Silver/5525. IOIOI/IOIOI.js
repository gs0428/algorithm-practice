const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input.shift();
const len = 2 * N + 1;
const M = +input.shift();
const S = input.shift();
let start = 0;
let cnt = 0;
let ans = 0;

while (start < M - 1) {
  if (S.slice(start, start + 3) === "IOI") {
    if (++cnt >= N) ans++;
    start += 2;
  } else {
    cnt = 0;
    start++;
  }
}

console.log(ans);

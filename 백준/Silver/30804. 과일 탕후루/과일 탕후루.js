const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");
const N = +input[0];
const fruits = input[1].split(" ").map(Number);

const cnt = Array(11).fill(0);

let left = 0;
let right = 0;
let distinct = 0;
let ans = 0;

while (right < N) {
  if (cnt[fruits[right]]++ === 0) distinct++;
  right++;

  while (distinct > 2) {
    if (--cnt[fruits[left]] === 0) distinct--;
    left++;
  }

  if (right - left > ans) ans = right - left;
}

console.log(ans);

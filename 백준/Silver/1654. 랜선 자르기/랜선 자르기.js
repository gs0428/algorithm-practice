const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, K] = input.shift().split(" ").map(Number);
const nums = input.sort((a, b) => a - b);
let mid = Math.floor(nums.reduce((acc, cur) => acc + +cur, 0) / N);
let minPrev = 0;
let maxPrev = nums[N - 1];
let ans = 0;
while (1) {
  if (minPrev === mid || maxPrev === mid) break;
  const sum = nums.reduce((acc, cur) => {
    return acc + Math.floor(cur / mid);
  }, 0);
  if (sum >= K) {
    ans = Math.max(ans, mid);
    minPrev = mid;
    mid = Math.floor((maxPrev + mid) / 2);
  } else {
    maxPrev = mid;
    mid = Math.floor((minPrev + mid) / 2);
  }
}
console.log(ans);

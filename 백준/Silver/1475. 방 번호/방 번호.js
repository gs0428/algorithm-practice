const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const nums = Array(10).fill(0);

input[0].split("").forEach((n) => {
  if (+n === 6) {
    nums[9]++;
  } else {
    nums[+n]++;
  }
});

const maxNum = Math.max(...nums);
const maxIdx = nums.indexOf(maxNum);

if (maxIdx === 9) {
  console.log(Math.ceil(nums[maxIdx] / 2));
} else {
  console.log(nums[maxIdx]);
}

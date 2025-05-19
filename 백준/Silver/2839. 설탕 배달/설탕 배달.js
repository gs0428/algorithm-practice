const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let min = 5000;
const N = +input[0];
const threeArr = Array.from({ length: Math.floor(N / 3) + 1 }, () => false);
const fiveArr = Array.from({ length: Math.floor(N / 5) + 1 }, () => false);

threeArr.forEach((_, idx) => {
  threeArr[idx] = true;
  const div = (N - 3 * idx) % 5;
  if (div === 0) {
    fiveArr[div] = true;
    min = Math.min(min, idx + (N - 3 * idx) / 5);
  }
});
fiveArr.forEach((_, idx) => {
  if (!fiveArr[idx]) {
    const div = (N - 5 * idx) % 3;
    if (div === 0) {
      min = Math.min(min, idx + (N - 5 * idx) / 3);
    }
  }
});

console.log(min === 5000 ? -1 : min);

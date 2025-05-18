const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const ans = [];
const T = +input[0];
const base = Array.from({ length: 14 }, (_, idx) => idx + 1);
const matrix = [base];
for (let i = 1; i < 15; i++) {
  const arr = [1];
  for (let k = 1; k < 14; k++) {
    const sum = matrix[i - 1][k] + arr[k - 1];
    arr.push(sum);
  }
  matrix.push(arr);
}
for (let i = 1; i <= 2 * T; i += 2) {
  const k = input[i];
  const n = +input[i + 1];
  ans.push(matrix[k][n - 1]);
}
console.log(ans.join("\n"));

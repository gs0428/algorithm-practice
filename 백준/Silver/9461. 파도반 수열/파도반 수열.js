const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input[0];
const arr = [1, 1, 1, 2, 2];
const ans = [];
for (let i = 1; i <= n; i++) {
  const N = +input[i];
  if (N <= 5 || arr[N - 1]) {
    ans.push(arr[N - 1]);
    continue;
  }
  for (let i = arr.length - 1; i <= N; i++) {
    arr.push(arr[i] + arr[i - 4]);
  }
  ans.push(arr[N - 1]);
}
console.log(ans.join("\n"));

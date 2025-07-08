const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input.shift();
const str = "I" + "OI".repeat(N);
const len = str.length;
const M = +input.shift();
let start = 0;
let cnt = 0;
while (start <= M - len) {
  let flag = false;
  for (let i = 0; i < len; i++) {
    if (input[0][i + start] !== str[i]) {
      flag = true;
      break;
    }
  }
  if (!flag) cnt++;
  start++;
}
console.log(cnt);

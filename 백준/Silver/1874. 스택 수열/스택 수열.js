const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const nums = input.map(Number);
let curIdx = 0;
const stack = [];
const ans = [];
const calc = [];
for (let i = 1; i <= n; i++) {
  stack.push(i);
  calc.push("+");
  if (nums[curIdx] === i) {
    while (1) {
      const last = stack[stack.length - 1];
      const last2 = stack[stack.length - 2];
      ans.push(last);
      stack.pop();
      calc.push("-");
      curIdx++;
      if (nums[curIdx] !== last2 || curIdx >= n || !last2) break;
    }
  }
}

const resArr = Array.from({ length: stack.length }, () => "-");
const ansStr = JSON.stringify([...ans, ...stack.reverse()]);
const inputStr = JSON.stringify(nums);
if (ansStr === inputStr) {
  return console.log([...calc, ...resArr].join("\n"));
}
console.log("NO");

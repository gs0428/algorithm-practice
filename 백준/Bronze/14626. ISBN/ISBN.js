const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let unknownIdx = -1;
const sum = input[0].split("").reduce((acc, cur, idx) => {
  if (cur !== "*") {
    if (idx % 2 && idx < 12) {
      return acc + +cur * 3;
    }
    return acc + +cur;
  }
  unknownIdx = idx;
  return acc;
}, 0);

if (sum % 10) {
  if (!(unknownIdx % 2)) {
    return console.log(10 - (sum % 10));
  }
  let num = 1;
  while (1) {
    if (!((sum + num * 3) % 10)) {
      return console.log(num);
    }
    num++;
  }
}
console.log(0);

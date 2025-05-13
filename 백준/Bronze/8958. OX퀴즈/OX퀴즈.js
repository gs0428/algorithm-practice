const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const ans = [];
input.splice(1).forEach((test) => {
  const arr = test.split("");
  let total = 0;
  let acc = 1;
  if (arr[0] === "O") {
    total = 1;
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === "O") {
      if (arr[i - 1] === "O") {
        acc += 1;
      }
      total += acc;
    } else if (arr[i] === "X") {
      acc = 1;
    }
  }
  ans.push(total);
});
console.log(ans.join("\n"));

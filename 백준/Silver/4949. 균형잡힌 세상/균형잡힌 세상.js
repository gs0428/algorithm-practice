const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

const ans = [];
input.forEach((i) => {
  let flag = false;
  const arr = [];
  const str = i.split("");
  for (const char of str) {
    if (char === "(" || char === "[") arr.push(char);
    else if (char === "]" || char === ")") {
      const last = arr.pop();
      if (
        last === undefined ||
        (char === ")" && last !== "(") ||
        (char === "]" && last !== "[")
      ) {
        ans.push("no");
        flag = true;
        break;
      }
    }
  }
  if (!flag) {
    if (arr.length > 0) ans.push("no");
    else ans.push("yes");
  }
});

console.log(ans.join("\n"));

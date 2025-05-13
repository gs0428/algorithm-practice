const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const ans = Array.from({ length: 26 }, () => -1);
const map = new Map();
input[0].split("").forEach((str, idx) => {
  const isExist = map.get(str);
  if (isExist === undefined) {
    const charIdx = str.charCodeAt() - 97;
    map.set(str, idx);
    ans[charIdx] = idx;
  }
});
console.log(ans.join(" "));

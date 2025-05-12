const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const ans = [];
const repeat = input.shift();
for (let i = 0; i < +repeat; i++) {
  const range = input.shift();
  const arr = input.splice(0, +range);
  const group = {};
  arr.forEach((a) => {
    const [_, category] = a.split(" ");
    group[category] = group[category] ? group[category] + 1 : 1;
  });
  const totalNum = Object.values(group).reduce((acc, v) => acc * (v + 1), 1);
  ans.push(totalNum - 1);
}

console.log(ans.join("\n"));

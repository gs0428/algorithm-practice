const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = +input[0];
const ans = [];
for (let i = 1; i <= T * 2; i += 2) {
  const [N, targetIdx] = input[i].split(" ").map(Number);
  const arr = input[i + 1].split(" ").map((a, idx) => ({
    num: +a,
    target: idx === targetIdx,
  }));
  let cnt = 0;
  let flag = false;
  while (1) {
    const newArr = arr.map((a) => a.num);
    const maxNum = Math.max(...newArr);
    while (1) {
      const a = arr.splice(0, 1);
      if (a[0].num === maxNum) {
        cnt++;
        if (a[0].target) flag = true;
        break;
      }
      arr.push(a[0]);
    }
    if (flag) {
      ans.push(cnt);
      break;
    }
  }
}

console.log(ans.join("\n"));

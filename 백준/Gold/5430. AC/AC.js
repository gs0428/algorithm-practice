const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input[0];

const TEST_SET = 3;

const ans = [];

for (let i = 1; i <= N * TEST_SET; i += 3) {
  const p = input[i].split("");
  const n = +input[i + 1];

  if (n === 0 && p.includes("D")) {
    ans.push("error");
    continue;
  }

  const num = input[i + 2].split("[")[1].split("]")[0].split(",");

  let flag = false;
  // false는 앞, true는 뒤
  let isRear = false;
  let front = 0;
  let rear = num.length - 1;

  for (const fun of p) {
    if (fun === "R") {
      isRear = !isRear;
    } else {
      if (front > rear) {
        ans.push("error");
        flag = true;
        break;
      }
      if (isRear) {
        rear--;
      } else {
        front++;
      }
    }
  }

  if (!flag) {
    if (isRear) {
      ans.push(
        `[${num
          .slice(front, rear + 1)
          .reverse()
          .join(",")}]`
      );
    } else {
      ans.push(`[${num.slice(front, rear + 1).join(",")}]`);
    }
  }
}

console.log(ans.join("\n"));

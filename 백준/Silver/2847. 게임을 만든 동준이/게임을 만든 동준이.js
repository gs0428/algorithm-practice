const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const levels = input.reverse();

let cnt = 0;
let currentLevel = +levels[0];

for (let i = 1; i < N; i++) {
  const level = +levels[i];

  if (currentLevel <= level) {
    const target = currentLevel - 1;
    cnt += level - target;
    currentLevel = target;
  } else {
    currentLevel = level;
  }
}

console.log(cnt);

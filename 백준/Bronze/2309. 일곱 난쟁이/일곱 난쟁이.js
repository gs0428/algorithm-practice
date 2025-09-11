const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const dwarfs = input.map(Number);

const MAX_DWARFS = 7;
const SUM_OF_TALL = 100;
const totalDwarfs = dwarfs.length;

const tempDwarfs = [];
let ans = [];

let flag = false;

function comb(depth, start, sum) {
  if (depth === MAX_DWARFS) {
    if (sum === SUM_OF_TALL) {
      ans = [...tempDwarfs];
      flag = true;
    }
    return;
  }
  if (flag) return;

  for (let i = start; i < totalDwarfs; i++) {
    tempDwarfs[depth] = dwarfs[i];
    comb(depth + 1, i + 1, sum + dwarfs[i]);
  }
}

comb(0, 0, 0);

console.log(ans.sort((a, b) => a - b).join("\n"));

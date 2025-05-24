const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const nums = input.map(Number).sort((a, b) => a - b);
const map = new Map();
const mean = (
  nums.reduce((acc, cur) => {
    const cnt = map.get(cur);
    map.set(cur, cnt ? cnt + 1 : 1);
    return acc + cur;
  }, 0) / n
).toFixed(0);
const mid = nums[Math.floor(n / 2)];
const range = Math.max(...nums) - Math.min(...nums);
const mode = [];
for (const [k, v] of map.entries()) {
  mode.push({ k, v });
}
mode.sort((a, b) => {
  if (b.v === a.v) return a.k - b.k;
  return b.v - a.v;
});
const maxMode = mode[0].v;
const filteredMode = mode.filter((num) => num.v === maxMode);
const modeValue =
  filteredMode.length > 1 ? filteredMode[1].k : filteredMode[0].k;
console.log(`${+mean}\n${mid}\n${modeValue}\n${range}`);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, r, c] = input[0].split(" ").map(Number);
let ans = 0;

function dfs(depth, startX, endX, startY, endY) {
  if (depth === 0) return;

  const midX = (endX + startX) / 2;
  const midY = (endY + startY) / 2;
  const count = (2 ** (depth - 1)) ** 2;
  // 1사분면
  if (c < midX && r < midY) {
    dfs(depth - 1, startX, Math.floor(midX), startY, Math.floor(midY));
  }
  // 2사분면
  if (c > midX && r < midY) {
    ans += count;
    dfs(depth - 1, Math.ceil(midX), endX, startY, Math.floor(midY));
  }
  // 3사분면
  if (c < midX && r > midY) {
    ans += count * 2;
    dfs(depth - 1, startX, Math.floor(midX), Math.ceil(midY), endY);
  }
  // 4사분면
  if (c > midX && r > midY) {
    ans += count * 3;
    dfs(depth - 1, Math.ceil(midX), endX, Math.ceil(midY), endY);
  }
}

dfs(N, 0, 2 ** N - 1, 0, 2 ** N - 1);

console.log(ans);

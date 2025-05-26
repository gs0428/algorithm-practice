const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
let startX = -1;
let startY = -1;
let people = 0;
const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => false)
);
const area = input.map((i, idx) => {
  const arr = i.split("");
  const index = arr.indexOf("I");
  if (index !== -1) {
    startX = index;
    startY = idx;
  }
  return arr;
});
function bfs(x, y) {
  visited[y][x] = true;
  if (area[y][x] === "P") {
    people++;
  }
  if (x < M - 1) {
    const right = area[y][x + 1];
    if (right !== "X" && right !== undefined && !visited[y][x + 1]) {
      bfs(x + 1, y);
    }
  }
  if (x > 0) {
    const left = area[y][x - 1];
    if (left !== "X" && left !== undefined && !visited[y][x - 1]) {
      bfs(x - 1, y);
    }
  }
  if (y < N - 1) {
    const up = area[y + 1][x];
    if (up !== "X" && up !== undefined && !visited[y + 1][x]) {
      bfs(x, y + 1);
    }
  }
  if (y > 0) {
    const down = area[y - 1][x];
    if (down !== "X" && down !== undefined && !visited[y - 1][x]) {
      bfs(x, y - 1);
    }
  }
}

bfs(startX, startY);

console.log(people || "TT");

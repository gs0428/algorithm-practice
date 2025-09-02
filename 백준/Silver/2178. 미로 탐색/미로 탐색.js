const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [y, x] = input.shift().split(" ").map(Number);

const visited = Array.from({ length: y }, () =>
  Array.from({ length: x }, () => false)
);
visited[0][0] = true;

const map = input.map((i) => i.split("").map(Number));

function bfs() {
  const queue = [[0, 0, 1]];
  while (queue.length > 0) {
    const [currentY, currentX, cnt] = queue.shift();
    if (currentY + 1 === y && currentX + 1 === x) {
      return console.log(cnt);
    }

    if (
      currentX > 0 &&
      !visited[currentY][currentX - 1] &&
      map[currentY][currentX - 1] !== 0
    ) {
      visited[currentY][currentX - 1] = true;
      queue.push([currentY, currentX - 1, cnt + 1]);
    }
    if (
      currentY > 0 &&
      !visited[currentY - 1][currentX] &&
      map[currentY - 1][currentX] !== 0
    ) {
      visited[currentY - 1][currentX] = true;
      queue.push([currentY - 1, currentX, cnt + 1]);
    }
    if (
      currentX < x - 1 &&
      !visited[currentY][currentX + 1] &&
      map[currentY][currentX + 1] !== 0
    ) {
      visited[currentY][currentX + 1] = true;
      queue.push([currentY, currentX + 1, cnt + 1]);
    }
    if (
      currentY < y - 1 &&
      !visited[currentY + 1][currentX] &&
      map[currentY + 1][currentX] !== 0
    ) {
      visited[currentY + 1][currentX] = true;
      queue.push([currentY + 1, currentX, cnt + 1]);
    }
  }
}

bfs();

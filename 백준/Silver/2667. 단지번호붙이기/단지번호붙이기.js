const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input.shift();
const visited = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => false)
);
let totalComplex = 0;
let eachComplexes = [];

function bfs(x, y) {
  visited[y][x] = true;
  const queue = [{ x, y }];
  let cnt = 0;
  while (queue.length) {
    const { x: qX, y: qY } = queue.shift();
    cnt++;
    if (qX > 0 && !visited[qY][qX - 1] && input[qY][qX - 1] === "1") {
      visited[qY][qX - 1] = true;
      queue.push({ x: qX - 1, y: qY });
    }
    if (qY > 0 && !visited[qY - 1][qX] && input[qY - 1][qX] === "1") {
      visited[qY - 1][qX] = true;
      queue.push({ x: qX, y: qY - 1 });
    }
    if (qX < N - 1 && !visited[qY][qX + 1] && input[qY][qX + 1] === "1") {
      visited[qY][qX + 1] = true;
      queue.push({ x: qX + 1, y: qY });
    }
    if (qY < N - 1 && !visited[qY + 1][qX] && input[qY + 1][qX] === "1") {
      visited[qY + 1][qX] = true;
      queue.push({ x: qX, y: qY + 1 });
    }
  }
  totalComplex++;
  eachComplexes.push(cnt);
}

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (!visited[y][x] && input[y][x] === "1") {
      bfs(x, y);
    }
  }
}

console.log(
  `${totalComplex}\n${eachComplexes.sort((a, b) => a - b).join("\n")}`
);

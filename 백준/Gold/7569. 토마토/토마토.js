const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");
const [M, N, H] = input.shift().split(" ").map(Number);

let shouldRipe = 0;
let date = 0;
const tomatos = [];
const queue = [];
const visited = Array.from({ length: H }, () =>
  Array.from({ length: N }, () => Array.from({ length: M }, () => false))
);

for (let i = 0; i < H; i++) {
  const floor = [];
  for (let j = i * N; j < (i + 1) * N; j++) {
    const line = input[j].split(" ").map((tomato, n) => {
      if (+tomato === 1) {
        // x, y, z, cnt 형태로 저장. cnt는 경과일
        // 데이터 접근 시 tomatos[z][y][x] 형식으로 접근
        queue.push([n, j - N * i, i, 0]);
        visited[i][j - N * i][n] = true;
      }
      if (+tomato === 0) {
        shouldRipe++;
      }
      return +tomato;
    });
    floor.push(line);
  }
  tomatos.push(floor);
}

// // 시작부터 모두 익은 경우
if (shouldRipe === 0) {
  return console.log(0);
}

function bfs() {
  let head = 0;
  while (head < queue.length) {
    const [x, y, z, cnt] = queue[head++];
    date = Math.max(cnt, date);
    if (x > 0 && !visited[z][y][x - 1] && tomatos[z][y][x - 1] === 0) {
      shouldRipe--;
      visited[z][y][x - 1] = true;
      queue.push([x - 1, y, z, cnt + 1]);
    }
    if (y > 0 && !visited[z][y - 1][x] && tomatos[z][y - 1][x] === 0) {
      shouldRipe--;
      visited[z][y - 1][x] = true;
      queue.push([x, y - 1, z, cnt + 1]);
    }
    if (z > 0 && !visited[z - 1][y][x] && tomatos[z - 1][y][x] === 0) {
      shouldRipe--;
      visited[z - 1][y][x] = true;
      queue.push([x, y, z - 1, cnt + 1]);
    }
    if (x < M - 1 && !visited[z][y][x + 1] && tomatos[z][y][x + 1] === 0) {
      shouldRipe--;
      visited[z][y][x + 1] = true;
      queue.push([x + 1, y, z, cnt + 1]);
    }
    if (y < N - 1 && !visited[z][y + 1][x] && tomatos[z][y + 1][x] === 0) {
      shouldRipe--;
      visited[z][y + 1][x] = true;
      queue.push([x, y + 1, z, cnt + 1]);
    }
    if (z < H - 1 && !visited[z + 1][y][x] && tomatos[z + 1][y][x] === 0) {
      shouldRipe--;
      visited[z + 1][y][x] = true;
      queue.push([x, y, z + 1, cnt + 1]);
    }
  }
}

bfs();

if (shouldRipe > 0) {
  return console.log(-1);
}
console.log(date);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
// M이 x, N이 y
const [M, N] = input.shift().split(" ").map(Number);

let shouldRipe = 0;
let ans = 0;

// [x, y] 형식으로 저장
const queue = [];

const tomatos = input.map((i, n) =>
  i.split(" ").map((num, m) => {
    const curNum = +num;
    if (curNum === 0) shouldRipe++;
    if (curNum === 1) queue.push([m, n, 0]);

    return curNum;
  })
);

if (shouldRipe === 0) return console.log(0);

let head = 0;

function bfs() {
  while (head < queue.length) {
    const [x, y, cnt] = queue[head++];
    ans = Math.max(ans, cnt);
    if (x > 0 && tomatos[y][x - 1] === 0) {
      tomatos[y][x - 1] = 1;
      shouldRipe--;
      queue.push([x - 1, y, cnt + 1]);
    }
    if (y > 0 && tomatos[y - 1][x] === 0) {
      tomatos[y - 1][x] = 1;
      shouldRipe--;
      queue.push([x, y - 1, cnt + 1]);
    }
    if (x < M - 1 && tomatos[y][x + 1] === 0) {
      tomatos[y][x + 1] = 1;
      shouldRipe--;
      queue.push([x + 1, y, cnt + 1]);
    }
    if (y < N - 1 && tomatos[y + 1][x] === 0) {
      tomatos[y + 1][x] = 1;
      shouldRipe--;
      queue.push([x, y + 1, cnt + 1]);
    }
  }
}

bfs();

if (shouldRipe > 0) {
  return console.log(-1);
}

console.log(ans);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");
const N = +input.shift();
const M = +input.shift();

const toys = Array.from({ length: N + 1 }, () => []);
const degrees = Array.from({ length: N + 1 }, () => 0);
const counts = Array.from({ length: N + 1 }, () => 0);

input.forEach((i) => {
  /**
   * X: 중간 부품이나 완제품 번호
   * Y: 중간 부품 혹은 기본 부품 번호
   * K: Y의 개수
   */
  const [X, Y, K] = i.split(" ").map(Number);

  toys[X].push([Y, K]);
  degrees[Y] += 1;
});

const queue = [];

for (let i = 1; i <= N; i++) {
  if (degrees[i] === 0) {
    queue.push(i);
    counts[i] = 1;
  }
}

let head = 0;
while (head < queue.length) {
  const current = queue[head];

  toys[current].forEach((toy) => {
    const [parts, count] = toy;
    degrees[parts]--;
    counts[parts] += count * counts[current];

    if (degrees[parts] === 0) {
      queue.push(parts);
    }
  });

  if (toys[current].length > 0) counts[current] = 0;

  head++;
}

const ans = [];

for (let i = 1; i <= N; i++) {
  if (counts[i] > 0) {
    ans.push(`${i} ${counts[i]}`);
  }
}

console.log(ans.join("\n"));

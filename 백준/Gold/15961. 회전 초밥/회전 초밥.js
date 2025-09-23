const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
/**
 * N = 접시의 수
 * d = 초밥의 가짓수
 * k = 연속해서 먹는 접시의 수
 * c = 쿠폰번호
 */
const [N, d, k, c] = input.shift().split(" ").map(Number);

const dishes = input.map(Number);
const sushis = Array.from({ length: d + 1 }, () => 0);
let kind = 0;

for (let i = 0; i < k - 1; i++) {
  if (++sushis[dishes[i]] === 1) {
    kind++;
  }
}

let start = 0,
  end = k - 1,
  ans = Number.MIN_VALUE;

while (start < N) {
  if (++sushis[dishes[end]] === 1) {
    kind++;
  }

  const bonus = sushis[c] ? 0 : 1;
  ans = Math.max(ans, kind + bonus);

  if (--sushis[dishes[start]] === 0) {
    kind--;
  }

  start++;
  end = (end + 1) % N;
}

console.log(ans);

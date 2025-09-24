const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const ans = [];

input.shift();

function combination(n, r) {
  let top = 1;
  let bot = 1;

  let end = Math.min(r, n - r);

  for (let i = 2; i <= end; i++) {
    bot *= i;
  }
  for (let i = n; i > n - end; i--) {
    top *= i;
  }

  return top / bot;
}

input.forEach((i) => {
  const [N, M] = i.split(" ").map(Number);

  ans.push(combination(M, N));
});

console.log(ans.join("\n"));

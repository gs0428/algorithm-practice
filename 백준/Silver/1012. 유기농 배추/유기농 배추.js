const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = +input.shift();
const ans = [];
for (let i = 0; i < T; i++) {
  let [M, N, K] = input.shift().split(" ").map(Number);
  const earthworms = input.splice(0, K).map((i) => i.split(" ").map(Number));
  while (earthworms.length > 0) {
    const start = earthworms.shift();
    const queue = [start];
    while (queue.length > 0) {
      const item = queue.shift();
      const xRightIndex = earthworms.findIndex(
        (e) => e[0] === item[0] + 1 && e[1] === item[1]
      );
      if (xRightIndex !== -1) {
        const loc = earthworms.splice(xRightIndex, 1);
        K--;
        queue.push(loc[0]);
      }
      const yRightIndex = earthworms.findIndex(
        (e) => e[0] === item[0] && e[1] === item[1] + 1
      );
      if (yRightIndex !== -1) {
        const loc = earthworms.splice(yRightIndex, 1);
        K--;
        queue.push(loc[0]);
      }
      const xLeftIndex = earthworms.findIndex(
        (e) => e[0] === item[0] - 1 && e[1] === item[1]
      );
      if (xLeftIndex !== -1) {
        const loc = earthworms.splice(xLeftIndex, 1);
        K--;
        queue.push(loc[0]);
      }
      const yLeftIndex = earthworms.findIndex(
        (e) => e[0] === item[0] && e[1] === item[1] - 1
      );
      if (yLeftIndex !== -1) {
        const loc = earthworms.splice(yLeftIndex, 1);
        K--;
        queue.push(loc[0]);
      }
    }
  }
  ans.push(K);
}
console.log(ans.join("\n"));

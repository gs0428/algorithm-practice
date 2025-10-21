const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input[0];
const nodes = Array.from({ length: N + 1 }, () => []);
const visited = Array.from({ length: N + 1 }, () => false);
let count = -1;

input.splice(2).forEach((pair) => {
  const [a, b] = pair.split(" ").map(Number);
  nodes[a].push(b);
  nodes[b].push(a);
});

function visit(num) {
  if (visited[num]) return;
  visited[num] = true;
  count++;
  for (const node of nodes[num]) {
    visit(node);
  }
}

visit(1);

console.log(count);

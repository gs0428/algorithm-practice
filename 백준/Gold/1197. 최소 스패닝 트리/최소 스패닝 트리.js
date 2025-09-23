const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [V, E] = input.shift().split(" ").map(Number);

// make
const parents = Array.from({ length: V + 1 }, (_, idx) => idx);

// find
function find(v) {
  if (parents[v] === v) return v;

  return (parents[v] = find(parents[v]));
}

// union
function union(a, b) {
  const aRoot = find(a);
  const bRoot = find(b);

  if (aRoot === bRoot) return false;

  parents[aRoot] = bRoot;
  return true;
}

let result = 0;
let count = 0;

const edgeList = input.map((i) =>
  // 0번은 from, 1번은 to, 2번은 weight
  i.split(" ").map(Number)
);

edgeList.sort((a, b) => a[2] - b[2]);

for (const edge of edgeList) {
  if (union(edge[0], edge[1])) {
    result += edge[2];
    if (++count === V - 1) {
      break;
    }
  }
}

console.log(result);

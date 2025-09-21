const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input.shift();
const nodes = Array.from({ length: N }, () => []);

input.forEach((i, idx) => {
  i.split(" ").forEach((num, index) => {
    if (num === "1") {
      nodes[idx].push(index);
    }
  });
});

const ans = [];

for (let i = 0; i < N; i++) {
  const connections = Array.from({ length: N }, () => 0);
  const visited = Array.from({ length: N }, () => false);

  function dfs(start, depth) {
    if (depth > 0 && start === i) {
      connections[i] = 1;
      return;
    }

    for (const node of nodes[start]) {
      if (!visited[node]) {
        visited[node] = true;
        connections[node] = 1;
        dfs(node, depth + 1);
      }
    }
  }

  dfs(i, 0);

  ans.push(connections.join(" "));
}

console.log(ans.join("\n"));

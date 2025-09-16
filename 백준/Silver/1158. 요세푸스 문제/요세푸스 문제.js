const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const people = Array.from({ length: N }, (_, idx) => idx + 1);
const visited = Array.from({ length: N }, () => false);
const ans = [];

let count = 0;
let idx = 0;

while (ans.length !== N) {
  if (visited[idx]) {
    if (idx === people.length - 1) {
      idx = 0;
    } else {
      idx++;
    }
    continue;
  }
  count++;

  if (count >= K && !visited[idx]) {
    visited[idx] = true;
    ans.push(people[idx]);
    count = 0;
  }

  if (idx === people.length - 1) {
    idx = 0;
  } else {
    idx++;
  }
}

console.log(`<${ans.join(", ")}>`);

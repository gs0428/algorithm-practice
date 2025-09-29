const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");
const N = +input.shift();

const colors = {
  R: 0,
  G: 0,
  B: 0,
};
const blinedColors = {
  R: 0,
  B: 0,
};

const visited = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => false)
);
const blinedVisited = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => false)
);

const area = [];
const blinedArea = [];
input.forEach((i) => {
  const temp = [];
  const blinedTemp = [];
  i.split("").forEach((c) => {
    if (c === "G") {
      blinedColors["R"]++;
    } else {
      blinedColors[c]++;
    }
    colors[c]++;
    temp.push(c);
    blinedTemp.push(c === "G" ? "R" : c);
  });
  area.push(temp);
  blinedArea.push(blinedTemp);
});

function dfs(x, y, char) {
  if (x > 0 && !visited[y][x - 1] && area[y][x - 1] === char) {
    colors[char]--;
    visited[y][x - 1] = true;
    dfs(x - 1, y, char);
  }
  if (y > 0 && !visited[y - 1][x] && area[y - 1][x] === char) {
    colors[char]--;
    visited[y - 1][x] = true;
    dfs(x, y - 1, char);
  }
  if (x < N - 1 && !visited[y][x + 1] && area[y][x + 1] === char) {
    colors[char]--;
    visited[y][x + 1] = true;
    dfs(x + 1, y, char);
  }
  if (y < N - 1 && !visited[y + 1][x] && area[y + 1][x] === char) {
    colors[char]--;
    visited[y + 1][x] = true;
    dfs(x, y + 1, char);
  }
}

function blinedDfs(x, y, char) {
  if (x > 0 && !blinedVisited[y][x - 1] && blinedArea[y][x - 1] === char) {
    blinedColors[char]--;
    blinedVisited[y][x - 1] = true;
    blinedDfs(x - 1, y, char);
  }
  if (y > 0 && !blinedVisited[y - 1][x] && blinedArea[y - 1][x] === char) {
    blinedColors[char]--;
    blinedVisited[y - 1][x] = true;
    blinedDfs(x, y - 1, char);
  }
  if (x < N - 1 && !blinedVisited[y][x + 1] && blinedArea[y][x + 1] === char) {
    blinedColors[char]--;
    blinedVisited[y][x + 1] = true;
    blinedDfs(x + 1, y, char);
  }
  if (y < N - 1 && !blinedVisited[y + 1][x] && blinedArea[y + 1][x] === char) {
    blinedColors[char]--;
    blinedVisited[y + 1][x] = true;
    blinedDfs(x, y + 1, char);
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      visited[i][j] = true;
      dfs(j, i, area[i][j]);
    }
    if (!blinedVisited[i][j]) {
      blinedVisited[i][j] = true;
      blinedDfs(j, i, blinedArea[i][j]);
    }
  }
}

const sum = colors["R"] + colors["G"] + colors["B"];
const blinedSum = blinedColors["R"] + blinedColors["B"];

console.log(sum, blinedSum);

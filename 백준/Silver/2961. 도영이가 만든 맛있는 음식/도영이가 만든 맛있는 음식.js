const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input.shift();
const ingredients = input.map((i) => i.split(" ").map(Number));

let tastyFlavor = Number.MAX_VALUE;

const combinations = [];

function subset(depth, len) {
  if (depth === N) {
    if (len > 0) {
      let S = 1;
      let B = 0;
      for (let i = 0; i < len; i++) {
        const [cS, cB] = combinations[i];
        S *= cS;
        B += cB;
      }
      tastyFlavor = Math.min(tastyFlavor, Math.abs(S - B));
    }
    return;
  }

  combinations[len] = ingredients[depth];

  subset(depth + 1, len + 1);
  subset(depth + 1, len);
}

subset(0, 0);

console.log(tastyFlavor);

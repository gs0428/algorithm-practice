const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const chicken = [];
const house = [];

input.forEach((street, streetIdx) =>
  street.split(" ").map((type, typeIdx) => {
    if (type === "1") {
      house.push([streetIdx, typeIdx]);
    }
    if (type === "2") {
      chicken.push([streetIdx, typeIdx]);
    }
  })
);

const totalChicken = chicken.length;

const tempChicken = [];
let minDistance = Number.MAX_VALUE;

function comb(depth, start, chickens) {
  if (depth === M) {
    let sum = 0;

    house.forEach((h) => {
      let minDis = Number.MAX_VALUE;
      tempChicken.forEach((c) => {
        minDis = Math.min(
          minDis,
          Math.abs(c[0] - h[0]) + Math.abs(c[1] - h[1])
        );
      });
      sum += minDis;
    });
    minDistance = Math.min(minDistance, sum);
    return;
  }

  for (let i = start; i < totalChicken; i++) {
    tempChicken[depth] = chicken[i];
    comb(depth + 1, i + 1, [...chickens, chicken[i]]);
  }
}

comb(0, 0, []);

console.log(minDistance);

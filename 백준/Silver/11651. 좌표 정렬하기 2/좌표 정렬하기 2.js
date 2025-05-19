const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const newArr = input.splice(1).sort((a, b) => {
  const [ax, ay] = a.split(" ").map(Number);
  const [bx, by] = b.split(" ").map(Number);
  if (ay === by) return ax - bx;
  return ay - by;
});

console.log(newArr.join("\n"));

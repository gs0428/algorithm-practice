const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const splittedInput = input[0].split("-");
const num = splittedInput.shift();
if (splittedInput.length === 0) {
  const sum = num
    .split("+")
    .map(Number)
    .reduce((a, c) => a + c, 0);
  return console.log(sum);
}
const sum = splittedInput.reduce(
  (acc, cur) =>
    acc +
    cur
      .split("+")
      .map(Number)
      .reduce((a, c) => a + c, 0),
  0
);
const calc = isNaN(+num)
  ? num
      .split("+")
      .map(Number)
      .reduce((acc, cur) => acc + cur, 0)
  : +num;
console.log(calc - sum);

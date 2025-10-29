const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const ans = [];

function factorial(num) {
  if (num === 0 || num === 1) return 1;
  let mul = 1;
  for (let i = num; i >= 2; i--) mul *= i;
  return mul;
}

input.splice(1).forEach((num) => {
  let count = 0;
  const loop = Math.floor(+num / 3);
  for (let i = loop; i >= 0; i--) {
    const rest = +num - 3 * i;
    const inLoop = Math.floor(rest / 2);
    for (let j = inLoop; j >= 0; j--) {
      const inRest = rest - 2 * j;
      count += Math.floor(
        factorial(i + j + inRest) /
          (factorial(i) * factorial(j) * factorial(inRest))
      );
    }
  }
  ans.push(count);
});

console.log(ans.join("\n"));

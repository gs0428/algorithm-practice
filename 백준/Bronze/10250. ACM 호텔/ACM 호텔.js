const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const ans = [];
input.splice(1).forEach((test) => {
  const [H, W, N] = test.split(" ").map(Number);
  const roomNum = (N % H ? Math.floor(N / H) + 1 : N / H)
    .toString()
    .padStart(2, "0");
  const roomFloor = N % H ? N % H : H;
  ans.push(`${roomFloor}${roomNum}`);
});
console.log(ans.join("\n"));

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

const meetings = input
  .map((meeting) => {
    const times = meeting.split(" ").map(Number);
    return [...times, times[1] - times[0]];
  })
  .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let lastEnd = 0;
let ans = 0;

meetings.forEach((meeting) => {
  if (meeting[0] >= lastEnd) {
    ans++;
    lastEnd = meeting[1];
  }
});

console.log(ans);

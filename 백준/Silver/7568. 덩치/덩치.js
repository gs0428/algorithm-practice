const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const ans = [];
const people = input.splice(1).map((person) => person.split(" ").map(Number));
people.forEach((person, idx) => {
  let cnt = 0;
  const restPeople = [...people];
  restPeople.splice(idx, 1);
  restPeople.forEach((p) => {
    if (p[0] > person[0] && p[1] > person[1]) cnt++;
  });
  ans.push(cnt + 1);
});

console.log(ans.join(" "));

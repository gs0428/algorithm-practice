const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const ascending = "1 2 3 4 5 6 7 8";
const descending = "8 7 6 5 4 3 2 1";
const str = input[0];
if (str === ascending) return console.log("ascending");
if (str === descending) return console.log("descending");
console.log("mixed");

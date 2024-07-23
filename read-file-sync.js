
const fs = require("node:fs");

console.log(fs.readFileSync("package.json", {encoding: "utf8",}))
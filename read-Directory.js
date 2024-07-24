
const fs = require("node:fs");

let directoryToRead = fs.readdirSync("new-directory");

console.log(directoryToRead)
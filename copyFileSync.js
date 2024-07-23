
const fs = require("node:fs");

fs.copyFileSync('nuevo_archivo.txt', 'append-file.txt');

console.log('source.txt was copied to destination.txt');
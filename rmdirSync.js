
const fs = require("node:fs");

fs.rmdirSync("new-directory", { recursive: true });


/*

node rmdirSync.js
(node:16670) [DEP0147] DeprecationWarning: In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true }) instead
(Use `node --trace-deprecation ...` to show where the warning was created)

//message by my terminal

*/
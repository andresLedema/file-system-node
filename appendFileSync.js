
const fs = require("node:fs");

try {
    fs.appendFileSync('append-file.txt', '\nagregando otra linea', 'utf8')
    console.log('The "data to append" was appended to file!')
} catch (err) {

}

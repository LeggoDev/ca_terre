const { argv } = require('node:process')

for (let i = 0; i < argv.length; i++) {
    if (i > 1) {
        console.log(argv[i])
    }
}
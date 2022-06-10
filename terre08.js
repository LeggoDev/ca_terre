const { argv } = require('node:process')

let isCorrect = true

if (argv.length !== 4) {
    isCorrect = false
}

for (let i = 0; i < argv.length; i++) {
    if (i > 1) {
        if (!/\d/.test(argv[i]) || argv[3] < 0) {
            isCorrect = false
        }
    }
}

if (isCorrect) {
    console.log(argv[2] ** argv[3])
} else {
    console.log('erreur.')
}
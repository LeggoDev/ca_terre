// A REVOIR AVEC CORRECTEUR

const { argv } = require('node:process')

let isCorrect = true

if (argv.length !== 3 || argv[2] < 0) {
    isCorrect = false
}

if (isCorrect) {
    console.log(Math.sqrt(argv[2]))
}
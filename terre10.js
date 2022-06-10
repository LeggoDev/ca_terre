const { argv } = require('node:process')

let isCorrect = true
let isPrimary = true

if (argv.length !== 3 || argv[2] < 0) {
    isCorrect = false
}

for (var i = 2; i < argv[2]; i++) {
    if (argv[2] % i === 0) {
        isPrimary = false
    }
}

if (isCorrect) {
    if (isPrimary) {
        console.log(`Oui, ${argv[2]} est un nombre premier.`)
    } else {
        console.log(`Non, ${argv[2]} n’est pas un nombre premier`)
    }
} else {
    console.log('erreur')
} 
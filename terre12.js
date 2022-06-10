const { argv } = require('node:process')

let finalArg = '';
let isCorrect = true;

if (argv.length !== 3 || argv[2].length <= 0) {
    isCorrect = false
}

if (argv[2]) {
    let initArg = argv[2].split(':');

    if (initArg[0] < 0 || initArg[0] > 12 || initArg[1] < 0 || initArg[1] > 59) {
        console.log('oui')
        isCorrect = false
    } else {
        let hours = ''
        let minutes = ''

        if (initArg[0] !== 0 && initArg[0] !== 12) {
            hours = parseInt(initArg[0]) + 12
        } else if (initArg[0] === 0) {
            hours = '12'
        } else {
            hours = '00'
        }

        if (initArg[1].length === 1) {
            minutes = `0${initArg[1]}`
        } else {
            minutes = `${initArg[1]}`
        }

        finalArg = `${hours}:${minutes}`
    }
}

if (isCorrect) {
    console.log(finalArg)
} else {
    console.log('erreur')
}
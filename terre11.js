const { argv } = require('node:process')

let finalArg = '';
let isCorrect = true;

if (argv.length !== 3 || argv[2].length <= 0) {
    isCorrect = false
}

if (argv[2]) {
    let initArg = argv[2].split(':');

    if (initArg[0] < 12 || initArg[0] > 24 || initArg[1] < 0 || initArg[1] > 59) {
        isCorrect = false
    } else {
        let hours = ''
        let minutes = ''

        if (initArg[0] !== '12' && initArg[0] !== '24') {
            hours = initArg[0] - 12
        } else if (initArg[0] === '12') {
            hours = '00'
        } else {
            hours = '12'
        }

        if (initArg[1].length === 1) {
            minutes = `0${initArg[1]}`
        } else {
            minutes = `${initArg[1]}`
        }

        finalArg = `${hours}:${minutes}PM`
    }
}

if (isCorrect) {
    console.log(finalArg)
} else {
    console.log('erreur')
}
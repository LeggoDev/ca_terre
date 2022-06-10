const { argv } = require('node:process')

let finalArg = 0;
let isCorrect = true;

if (argv.length !== 5) {
    isCorrect = false
}

if (argv[2] === argv[3] && argv[2] === argv[4]) {
    isCorrect = false
}

for (let i = 0; i < argv.length; i++) {
    if (i > 1) {
        if (!/\d/.test(argv[i])) {
            isCorrect = false
        }
    }
}

if (argv[2] < argv[3] && argv[2] > argv[4] || argv[2] > argv[3] && argv[2] < argv[4]) {
    finalArg = argv[2]
} else if (argv[3] < argv[2] && argv[3] > argv[4] || argv[3] > argv[2] && argv[3] < argv[4]) {
    finalArg = argv[3]
} else {
    finalArg = argv[4]
}

if (isCorrect) {
    console.log(finalArg)
} else {
    console.log('erreur')
}
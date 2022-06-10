const { argv } = require('node:process')

let response = ''

if (parseInt(argv[2]) % 2 === 0) {
    response = 'pair'
} else if (parseInt(argv[2]) % 2 === 1) {
    response = 'impair'
} else {
    response = 'Tu ne me la mettras pas à l’envers.'
}

console.log(response)

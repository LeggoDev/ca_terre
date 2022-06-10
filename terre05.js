const { argv } = require('node:process')

const resultat = Math.floor(argv[2] / argv[3])
const reste = argv[2] % argv[3]

console.log(`résultat: ${resultat}`)
console.log(`reste: ${reste}`)
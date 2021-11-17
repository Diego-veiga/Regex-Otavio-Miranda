const {texto} = require('./base')

const RegEx = /João|Maria/gi

// console.log(texto.match(RegEx))
 console.log(texto.replace(/(João|Maria)/gi, '"$1"'))
// console.log(texto.replace(/(João|Maria)/gi, function(found){
//   return found.toUpperCase()
// }))
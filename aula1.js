const {texto} = require('./base')

// g = global (encontra todas as ocorrencias)
// i = isensitive
// () = grupos 
// | = ou 
const RegExp = /(maria|joao|luiz)(, hoje sua esposa)/i;
const found = RegExp.exec(texto)


console.log(found[0])
console.log(found[1])
console.log(found[2])
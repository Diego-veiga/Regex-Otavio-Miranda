const {alfabeto} = require('./base')

//[abc] = conjunto
// [^] -> negação do conjunto
//[0-9] = range , deve ser implementado na ordem crescente


const Regex = /['abc]+/g


console.log(alfabeto)


console.log(alfabeto.match(Regex))
console.log(alfabeto.match(/[a-z]+/g))
console.log(alfabeto.match(/[A-Z]+/g))
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g))
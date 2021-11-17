const {cpfs} = require('./base')


const cpf='254.224.877-45'
//^ -> começa com 
//$ -> termina com 
// m -> multiline 

const regex=/^(\d{3}\.){2}\d{3}\-\d{2}$/gm;

console.log(cpfs)
//console.log(cpf.match(regex))
console.log(cpfs.match(regex))
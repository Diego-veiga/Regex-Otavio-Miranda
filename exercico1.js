const {cpfs , ips} = require('./base')

console.log('cpfs',cpfs)

console.log('encontrando cpfs',cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g))
console.log('encontrando cpfs',cpfs.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g))
console.log('encontrando cpfs',cpfs.match(/(\d{3}\.){2}\d{3}\-\d{2}/g))

console.log('testando', cpfs.match(/\d{3}/g))

// console.log('ips',ips)

// console.log('encontrando2',ips.match(/[0-9]+/g))
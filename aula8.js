const { lookahead} = require('./base')

 console.log(lookahead)
// console.log(lookahead.match(/.+[^in]active$/gim))

// //Positive lookhead (frases que tem active)
// console.log(lookahead.match(/.+(?=[^in]active)/gim))

// //Positive lookhead (frases que tem inactive)
// console.log(lookahead.match(/.+(?=inactive)/gim))

// //Negative lookhead (frases que não tem active)
// console.log(lookahead.match(/^(?!.+[^in]active).+$/gim))

// //Negative lookhead (frases que não tem inactive)
// console.log(lookahead.match(/^(?!.+inactive).+$/gim))


//Positive lookhind (frases que começam com online)
console.log('frases que começam com online',lookahead.match(/(?<=ONLINE\s+)\S+.*/gim))


//Negative  lookhind (frases que não começam com online)
console.log('frases que não começam com online',lookahead.match(/^.+(?<!ONLINE.+)$/gim))

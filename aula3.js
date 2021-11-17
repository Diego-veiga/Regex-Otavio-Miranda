const {texto, arquivos}= require('./base')

// * (opcionais)  0 ou n
// + (obrigatorio) 1 ou n 
// ? (opcional) 0 ou 1
// / caractere de escape
//{n,m} minimo e maximo 
//{10,} no minimo 10
//{,10} no maximo 10
//{5,10} de 5 a 10
//{10}

console.log(texto)
const RegEx = /jo+ão+/gi

console.log(texto.match(RegEx))


const regEx2 =/\.jpe?g/gi

for(const arquivo of arquivos){
    console.log(arquivo.match(regEx2))
}
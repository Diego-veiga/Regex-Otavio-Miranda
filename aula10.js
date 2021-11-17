//encontra todas as palavras 
const palavrasRegEx =/([\wÀ-Ù]+)/g

//não numeros
const nãoNumerosRegEx=/\D/

//encontrar IPs
const ipRegExp =/((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g

//valida CPF
const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2}/g

//valida telefones
const validaTelefones =/^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/g

//valida senhas fortes
const validaSenhasFortes =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\])]).{8,}$/g

//valida emails
//[^\s]+@[^\s]+\.[^\s]+(\w+)*
//[^\s\.]+\.?[^\s\.]+@[^\s]+\.[^\s]+\W+

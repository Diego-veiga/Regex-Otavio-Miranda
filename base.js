const texto=`João trouxe flores para sua amada namorada em 10 de janeiro de 1970 
Maria era o nom dela

Foi um ano excelente na vida de joão. Teve 5 filhos, todos adultos atualmente.
gabriel, hoje sua esposa, ainda faz aquele café com pão de queijo nas tardes de domingo.
Tambem né! Sendo a boa mineira que é, nunca esquece seu famoso pão de queijo.

Não canso de ouvir a Maria:
Joooooooãooo, o cafe ta prontinho aqui. Veeem !
`

const arquivos=[
'atenção.jpg',
'FOTO.jpeg',
'Meu gatinho.jpg',
'Meu gatinho.JPG',
'Meu gatinho.JPEG',
'Meu gatinho.jpeg',
'Marifo.png',
'Lista de compras.png'

]


const html = `<p> ola mundo </p> <p> ola mundo </p> <div sou uma div</div>` 

const html2 = `<p> ola mundo </p> <p> ola mundo </p> <div sou uma div</div>` 


const alfabeto ='ABCDEFGHIJLFMNOPQ abcdefghijlmnop  123456789'

const cpfs=`
os CPFs são:
254.224.877-45 215.978.456-12 047.258.369-96

963.987.321-00`

const ips=`
os IP são:
0.0.0.0

192.168.0.25

    10.10.5.12

255.255.255.255`


const lookahead=`
ONLINE 192.168.0.1 ABCDE inactive
OFFLINE 192.168.0.2 ABCDE active
ONLINE 192.168.0.3 ABCDE active
ONLINE 192.168.0.4 ABCDE active
OFFLINE 192.168.0.5 ABCDE active
OFFLINE 192.168.0.6 ABCDE inactive
`

module.exports={
    arquivos,
    texto,
    html,
    html2,
    alfabeto,
    cpfs,
    ips,
    lookahead
}
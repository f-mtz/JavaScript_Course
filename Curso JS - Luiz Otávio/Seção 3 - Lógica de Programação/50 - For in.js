console.log('50: === SEÇÃO 3: LÓGICA DE PROGRAMAÇÃO - Laço FOR IN ====')

//For in -> Lê indices ou chaves do Objetos

var frutas = ['Maça', 'Uva', 'Morango']

for(let posicao in frutas) {
    console.log(posicao)
}

console.log('=== TRABALHANDO COM OBJETOS + FOR IN ===')
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 20
}


const vet = []
//AQUI ELE VAI LER LITERALMENTE OS NOME DOS ATRIBUTOS DO OBJETO 
for(let chave in pessoa) {
    vet.push(chave)
    console.log(chave)
    // console.log(vet) //<- FAZENDO ASSIM, ELE IMPRIMIRIA O ATRIBUTO E O INDICE DO VETOR CONTENDO O ATRIBUTO
}

console.log(vet)

//A CONCATENAÇÃO COM NUMERO É SÓ PRA DISTINGUIR O QUE ESTÁ SENDO IMPRESSO
console.log(pessoa.nome + ' 1') //ACESSA O ATRIBUTO NOME DO OBJETO PESSOA
console.log(pessoa['nome'] + ' 2') //ACESSA O ATRIBUTO NOME DO OBJETO PESSOA

const key = 'nome'
console.log(pessoa[key] + ' 3')

//======================================
//CAPTURANDO TANTO O NOME DO ATRIBUTO QUANTO O VALOR DO ATRIBUTO PASSADO


for(let chave in pessoa) {
    console.log(chave, pessoa[chave])
}

function falaOi(a, b) {
    console.log(a + b);
}


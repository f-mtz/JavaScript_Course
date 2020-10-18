console.log('75: === SEÇÃO 4: FUNÇÕES - Funções Geradoras ====')

function* senhaBanco() {
    //Qualquer código... (usamos yield ao invés de return aqui, veremos a seguir o porque)
    //O Yield vai retornar um valor a cada vez que a função for chama, 
    //É como se eu tivesse uma fila com vários retornos, e ao chamar a função ele retorna o próximo da fila
    yield 'Senha 01';
    yield 'Senha 02';
    yield 'Senha 03';

}

const painel = senhaBanco()
// console.log(painel.next())



console.log(painel.next().value) // resultado dessa primeira chamada é -> 'Senha 01'
console.log(painel.next().value) // resultado dessa segunda chamada é -> 'Senha 02'
console.log(painel.next().value) // resultado dessa terceira chamada é -> 'Senha 03'

// console.log('Acesso ao indice da função: ' + painel.next().value)

//CASO QUEIRAMOS VER TODOS OS VALORES GUARDADOS PODEMOS LANÇAR UM 'FOR' NA FUNÇÃO 
//POIS A ENGINE PERMITE USAR LAÇOS DE REPETIÇÕES COMO SE A FUNÇÃO* GERADORA FOSSE UMA LISTA, E DE CERTA FORMA É UMA LISTA MESMO

for (let senha of painel) {
    console.log(senha)
}

function test(){
    let encapsulador = []
    for (let senha of painel) {
    encapsulador.push(senha)
    }
}


let x = test()
console.log(x)
// console.log(test())


//Vamos simular a chegada gradual com frequencia aleatoria de clientes


let ficha = []
ficha.push('Tiryon Lenister')
ficha.push('Jamie Lenister')
ficha.push('Sansa Stark')
ficha.push('Ned Stark')
ficha.push('John Snow')

function* chegadaClientes() {
    for(let senha of ficha){
        yield senha
    }
}

ficha.push('Leonard')


const atendimento = chegadaClientes()

console.log(atendimento.next().value)
console.log(atendimento.next().value)
console.log(atendimento.next().value)
console.log(atendimento.next().value)
console.log(atendimento.next().value)
// console.log(atendimento.next().value)

let repasse = []
repasse.push(atendimento.next().value)
repasse.push(atendimento.next().value)
repasse.push(atendimento.next().value)
repasse.push(atendimento.next().value)

console.log('Esse é o valor do repasse: ' + repasse)

function* geradora2() {
    let i = 0

    while(true) {
        yield i;
        i++
    }
}

const numeroDaFila = geradora2()
console.log(numeroDaFila.next().value)
console.log(numeroDaFila.next().value)
console.log(numeroDaFila.next().value)
console.log(numeroDaFila.next().value)
console.log(numeroDaFila.next().value)


//A SITUAÇÃO ABAIXO É INTERESSANTE, OBSERVE:

//A geradora3() é uma função que tem a responsabilidade de entregar os itens da sua fila ao ser chamada, nesse caso os itens são 0, 1 e 2 
function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

console.log('executados pela g3: ')

const g3 = geradora3()
console.log(g3.next().value)
console.log(g3.next().value)



//MAS AQUI NÓS DECIDIMOS QUE A RESPONSABILIDADE DA geradora3() vai ser passada/atribuida a geradora4(), 
//sendo assim a geradora4 é quem vai entregar os próprios itens dela e os itens que ela assumiu da geradora3
//Mas note, que ela passa tudo,
function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

console.log('executados pela g4: ')


const g4 = geradora4()
for(let valor of g4) {
    console.log(valor)
}


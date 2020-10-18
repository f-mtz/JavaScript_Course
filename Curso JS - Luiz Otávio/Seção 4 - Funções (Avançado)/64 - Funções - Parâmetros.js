console.log('64: === SEÇÃO 4: FUNÇÕES - PARÂMETROS DE FUNÇÕES ====')

//(ACREDITE, ESSA AULA VAI TE SURPREENDER)

//#1 CONSIDERE A ASSINATURA ABAIXO
function funcao() {
    console.log('Oie')
}
//AGORA CONSIDERE A CHAMADA ABAIXO
funcao('Valor')

//A) A NOSSA FUNÇÃO 'funcao' NÃO TEM PARÂMETROS NA ASSINATURA, MAS NA CHAMADA INSERIMOS UM PARÂMETRO, PORQUE?
//B) VAI DAR ERRO? O QUE VAI ACONTECER?
//VEJAMOS O QUE OCORRE:

//NO JAVASCRIPT SE PASSARMOS PARAMETRO PARA UMA FUNÇÃO QUE FOI DECLARADA SEM PARÂMETRO
//ELE GUARDA OS VALORES

//ATENÇÃO: SÓ FUNCIONA PARA FUNÇÕES COMUNS, NÃO FUNCIONA PARA ARROW FUNCTION
//EXEMPLO:

function funcaoDemonstrativa() {
    console.log(arguments)
}

function funcaoDemonstrativaX(...args) {
    console.log(args)
}

//VAI EXIBIR OS VALORES DIGITADOS
funcaoDemonstrativa(0, 1, 2, 3, 4, 5, 6, 7)
console.log('Outra forma de declarar: ')
funcaoDemonstrativaX('+', 1, 2, 3)

//DECLARAÇÃO QUE VAI SOMAR N ARGUMENTOS
function funcaoDemonstrativa2() {
    let total = 0
    for (let item of arguments) {
        total += item
    }
    console.log(total)
}

//DETALHE, MESMO QUE PASSEMOS UMA QUANTIDADE LIMITADA DE ARGUMENTOS NA DECLARAÇÃO, 
//AINDA PODEMOS PASSAR QTD INDETERMINADAS DE ARGUMENTOS QUE VÃO FICAR NO ARRAY ARGUMENT PADRÃO DAS FUNÇÕES

funcaoDemonstrativa2(1, 2, 3)

//AGORA O CONTRÁRIO, DECLARANDO N VALORES NOS PARÂMETROS E NA CHAMADA PASSANDO (N - X) ARGUMENTOS
function funcaoDemonstrativa3(a, b, c, d, e) {
    console.log(arguments)
    console.log(a, b, c, d, e)
}

funcaoDemonstrativa3(1, 2, 3)

function funcaoDemonstrativa4(a, b) {

    // console.log('f4(): ')
    //A LINHA ABAIXO VAI DAR ERRO, A ENGINE DO JS VAI DIZER QUE C, D e E NÃO ESTÃO DEFINIDOS
    // console.log(a, b, c, d, e)
}

funcaoDemonstrativa4(1, 2)

//PORÉM NÃO PODEMOS OPERAR UNDEFINED, ENTÃO COMO RESOLVER ISSO? EXISTEM ALGUMAS MANEIRAS
//MANEIRA ANTIGA DE RESOLVER ISSO

function funcaoDemonstrativa5(a, b) {
b = b || 0;
console.log(a + b)
}

console.log('f5(): ')
funcaoDemonstrativa5(2)

//MANEIRA MODERNA DE SE FAZER ISSO:
function funcaoDemonstrativa6(a = 0, b = 2, c = 4) {
    console.log(a + b + c)
}

console.log('Segue o valor da f6(): ')
funcaoDemonstrativa6()

//PULANDO UM VALOR PARA USAR/DESCOBRIR O SEU VALOR PADRÃO
funcaoDemonstrativa6(2, undefined, 20)

//E NESSE CONTEXTO O NULL É O MESMO QUE DIGITAR 0
funcaoDemonstrativa6(2, null, 20)

//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
function desestruturando({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}

let obj = {nome: 'Luiz', sobrenome: 'Otávio', idade: 20}
desestruturando(obj)

function desestruturando2([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}

let vet = ['Luiz #2', 'Otávio #2', 2]
desestruturando2(vet)
desestruturando2(['Luiz #3', 'Otávio #3', 3])

//O PARÂMETRO REST (...) SEMPRE DEVE SER INDICADO NO ULTIMO PARÂMETRO
//O PARÂMETRO REST FUNCIONA EM ARROW FUNCTIONS TAMBÉM
function conta(operador, elemento_neutro, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') elemento_neutro += numero
        if (operador === '-') elemento_neutro -= numero
        if (operador === '/') elemento_neutro /= numero
        if (operador === '*') elemento_neutro *= numero
    }

    console.log(elemento_neutro)
}

console.log('O 1º teste com a função cota: ')
conta('+', 0, 5, 2)
console.log('O 2º teste com a função cota: ')

conta('*', 1, 5, 2)
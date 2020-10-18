console.log('63: === SEÇÃO 4: FUNÇÕES - FORMAS DE DECLARAR ====')

//OBS: COMO AS FUNÇÕES EXEMPLO ABAIXO USAM O CONSOLE LOG, SE EU CHAMAR QUALQUER UMA DELAS DENTRO DE UM CONSOLE.LOG
//O CONSOOLE VAI EXECUTÁ-LA E DEPOIS IMPRIMIR 'UNDEFINED' POIS ESTARIAMOS LANÇANDO CONSOLE.LOG DENTRO DE CONSOLE.LOG

//1 - DECLARAÇÃO DE FUNÇÃO COMUM(FUNÇÃO HOISTING):
//COM ESSA FORMA DE DECLARAÇÃO A ORDEM ENTRE A DECLARAÇÃO DA FUNÇÃO E A CHAMADA NÃO IMPORTA

function falaOi() {
    console.log('1 Oie')
}

//CHAMADA 1
falaOi()

//2 - FUNÇÃO ANÔNIMA (SEM NOME) ATRIBUIDA A VARIÁVEL -
//E ESSA É A VANTAGEM DELA, DESSA FORMA ALÉM DE GUARDAR O RESULTADO DAS OPERAÇÕES/PROCESSAMENTO 
//E PASSAR ELA COMO PARÂMETRO EM OUTRAS FUNÇÕES

const souUmDado = function() {
    console.log('2 Sou um dado')
}

//CHAMADA 2
souUmDado()

//2.1 DECLARAÇÃO DE FUNÇÃO COM SINTAXE COMUM ATRIBUIDA A UMA VARIÁVEL, FUNCIONA PERFEITAMENTE
const dado = function souUmaFuncaoComum() {
    console.log(`2.1 Sou uma função comum atribuida a uma variável`)
}

//CHAMADA 2.1
dado()

//3 - FUNÇÃO RECEBENDO FUNÇÃO EM SEU PARÂMETRO
function executaFuncao(funcao) {
    console.log(`3 Vou executar sua função a abaixo: `)
    funcao()
}

//CHAMADA 3
executaFuncao(souUmDado)
console.log('Teste: ')
executaFuncao(falaOi)

//4 - ARROW FUNCTION - FUNÇÃO ANÔNIMA COM NOTAÇÃO MAIS ELEGANTE
const funcaoArrow = () => {
    console.log(`4 Uso a notação Arrow, por isso sou mais elegante e menos verbosa :D`)
}

//CHAMADA 4
funcaoArrow()

// 5 - FUNÇÃO DENTRO DE OBJETOS
const objeto = {
    falar: () => {
        console.log('5 Estou falando de dentro do objeto')
    }
}
//CHAMADA 5
objeto.falar()

//RESUMO DE FUNÇÕES - AULA 63

//FUNÇÕES PODEM OU NÃO TER NOMES
//A ASSINATURA/DECLARAÇÃO PODE SER ATRIBUIDA A VARIÁVEIS
//SE A ASSINATURA/DECLARAÇÃO FOR ATRIBUIDA A VARIÁVEIS, A CHAMADA DA FUNÇÃO FICA NOME_DA_VARIAVEL()
//A ASSINATURA/DECLARAÇÃO PODE SER ATRIBUIDA A FUNÇÕES COMO PARÂMETRO
//FUNÇÕES PODEM SER CHAMADAS EM OUTRAS FUNÇÕES




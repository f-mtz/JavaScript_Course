console.log('65: === SEÇÃO 4: FUNÇÕES - RETORNOS DE FUNÇÕES ====')

function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa('Luiz', 'Otávio')
const p2 = { nome: 'Eliot', sobrenome: 'Alderson'}

console.log(p1)
console.log(p2)

console.log(typeof p1)
console.log(typeof p2)

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo)               //EXIBE O CONTEÚDO DO DADO olaMundo, QUE É A FUNÇÃO FALA RESTO, 
                                    //NOTE QUE O CONTEÚDO (QUE É UMA FUNÇÃO) NESSE CASO NÃO ESTÁ SENDO EXECUTADO

console.log(olaMundo())             //AGORA SIM EXIBE O RESULTADO DA EXECUÇÃO DA FUNÇÃO RECEBIDA POR OLÁ MUNDO
console.log(olaMundo('mundo !'))    //ESSA FORMA DE CHAMADA VAI PASSAR UM DADO PARA A VARIÁVEL INTERNA A FUNÇÃO falaFrase

//UMA SITUAÇÃO FICTICIA PARA ELUCIDAR:

//ENTÃO CRIEI UMA FUNÇÃO QUE VAI USAR DADOS DE FORMA REATIVA POR MEIO DE UMA INTEGRAÇÃO OU WEB SCRAP
//DO SERVIDOR DE UMA EMPRESA DE TAXI

function totalCorrida(bandeira = 5.0, precoKm = 2.0) {
    function km(qtd_Km = 0.0) {
        return bandeira + qtd_Km * precoKm
    }
    return km;
}

//A MESMA FUNÇÃO ACIMA, POREM MENOS VERBOSA
function totalCorrida2(bandeira = 5.0, precoKm = 2.0) {
    return (qtd_Km = 0.0) => bandeira + qtd_Km * precoKm;
}

const custo = totalCorrida2()
let km = 3.0
console.log(`O preço da corrida para ${km} Km resultou em: R$ ` + custo(km).toFixed(2))
km = 4.0
console.log(`O preço da corrida para ${km} Km resultou em: R$ ` + custo(km))

//OU SEJA, CRIAMOS CLOSURES, UMA VEZ CHAMADA A FUNÇÃO, 
//A FUNÇÃO INTERNA VAI LEMBRAR DO ESCOPO DA FUNÇÃO PAI DE QUANDO ELA FOI CHAMADA PELA PRIMEIRA VEZ

//UMA VEZ AQUELE PROCESSO INICIADO, E SE FOR UM PROCESSAMENTO RECORRENTE QUE USE O VALOR INICIAL, 
//A FUNÇÃO FILHA VAI CONSEGUIR USAR


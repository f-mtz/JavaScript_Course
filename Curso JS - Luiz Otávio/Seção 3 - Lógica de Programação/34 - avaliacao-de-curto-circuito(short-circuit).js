console.log('34: === SEÇÃO 3: LÓGICA DE PROGRAMAÇÃO - AVALIAÇÃO DE CURTO CIRCUITO (SHORT-CIRCUIT) ====')

//A ENGINE JS É CAPAZ DE AVALIAR TUDO COMO TRUE OU FALSY VALUES


console.log('Luiz' && '' && 'Maria') // -> vai retornar ''

//Vejamos uma situação simples e prática onde a informação acima é útil
//IMAGINE QUE QUEREMOS QUE UMA FUNÇÃO SEJA EXECUTADA COM BASE NO VALOR DE UMA VARIÁVEL, PODEMOS FAZER DA SEGUINTE MANEIRA:

function falaOi() {
    return 'Oi'
}

let vaiExecutar = undefined;

console.log(vaiExecutar && falaOi())

//O QUE FIZEMOS ACIMA FOI JUSTAMENTE O QUE CHAMAMOS DE AVALIAÇÃO EM CURTO CIRCUITO
//ISSO TORNA O CÓDIGO MAIS PERFORMÁTICO


//OUTRO EXEMPLO

function falaTchau() {
    return 'Tchau'
}
let vaiExecutar2 = true;
let vaiExecutar3 = true;

console.log(vaiExecutar2 && vaiExecutar3 && falaTchau() && falaOi())

//ISSO TUDO FOI EM EXPRESSÕES QUE SÓ TEM 'E - &&' E EM EXPRESSÕES QUE TIVESSE O 'OU - ||' ? VEJAMOS

console.log(0 || false || null || 'Luiz Otávio' || 'Teclados Cassio - Privia' || true)

//SERIA RETORNADO QUALQUER VERDADEIRO? MAS QUAL? NO CASO DE EXPRESSÕES QUE TIVEREM APENAS OU ELE TRÁZ O PRIMEIRO VALOR QUE A ENGINE INTERPRETA COMO 'TRUE'

//OBS. NOTE QUE É SÓ O VALOR TRUE OU FALSE E A EXECUÇÃO, NÃO TEM SENÃO NESSE TÉCNICA COMO EM OPERAÇÕES TERNÁRIAS
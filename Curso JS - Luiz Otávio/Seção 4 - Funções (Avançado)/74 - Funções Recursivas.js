console.log('74: === SEÇÃO 4: FUNÇÕES - Funções Recursivas ====')

//NADA MAIS É QUE FUNÇÕES CHAMANDO ELAS MESMAS, SEM MISTÉRIOS

function recursiva(max) {
    console.log(max)
    if (max >= 10) return; // <- ESSE RETURN SEM NADA DEPOIS É PRA PARAR, COMO UM 'BREAK'
    max++
    recursiva(max)
}

//VAI CONTAR DE ZERO A 10
recursiva(0)
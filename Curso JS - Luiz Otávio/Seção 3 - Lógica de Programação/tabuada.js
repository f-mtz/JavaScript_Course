function tabuada(numero) {
    for(let vezes = 1; vezes <= 10; vezes++) {
        const resultado = numero * vezes
        console.log(numero +' x '+ vezes + ' = ' + resultado)
    }
}

tabuada(7)
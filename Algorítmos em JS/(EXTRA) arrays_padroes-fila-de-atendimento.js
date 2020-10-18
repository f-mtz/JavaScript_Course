console.log("FAÇA UM ALGORÍTMO QUE COLETE DE X EM X ELEMENTOS DE OUTROS ARRAYS QUE VÃO FUNCIONAR COMO FONTES") 

//ALGORÍTMO IDEALIZADO POR MIM E CONSTRUÍDO COM AUXILIO DO PROFESSOR LUÍZ OTÁVIO

 // Seu array

const array = [
  [0, 1, 2, 3, 4, 5, 'x', 'y'],
  [6, 7, 8, 9, 10, 11, 'z'],
  [12, 13, 14, 15, 16, 17]
];
 
// Número de elementos desejados (2x2, 3x3, etc...)
const numberOfElements = 3;
 
// Índice do array
let arrayIndex = 0;
// O novo array
const newArray = [];
 
while (array.some(item => item.length)) {
  // O array interno
  const innerArray = array[arrayIndex];
 
  if (!innerArray) {
    // Se não existir, voltamos ao início do laço
    arrayIndex = 0;
    continue;
  }
 
  // Pegamos o trecho desejado
  const itens = innerArray.splice(0, numberOfElements);
  if (itens.length) {
    // Se existir, esse trecho vai para o novo array
    newArray.push(...itens)
  }
 
  // Incrementamos o índice do array
  arrayIndex++;
}
 
console.log(newArray); // [0, 1, 6, 7, 12, 13, 2, 3, 8, 9, 14, 15, 4, 5, 10, 11, 16, 17]
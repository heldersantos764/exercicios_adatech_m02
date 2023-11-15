// Escreva um programa em JavaScript que verifica se um número 
// é divisível por 3 e por 5 ao mesmo tempo. 
// Use a estrutura if-else para realizar essa verificação.
let number = 15;
let isDivisibleByThreeAndFive = number % 3 === 0 && number % 5 === 0

console.log(
    isDivisibleByThreeAndFive ? 
    `O número ${number} é divisível por 3 e 5 ao mesmo tempo.` :
    `O número ${number} não é divisível por 3 e 5 ao mesmo tempo.`
);
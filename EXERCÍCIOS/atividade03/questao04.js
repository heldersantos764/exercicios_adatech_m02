// Escreva um programa em JavaScript que verifica se um ano é bissexto. 
// Use a estrutura if-else para realizar essa verificação. 
// Dica: um ano bissexto é divisível por 4, mas não por 100,
// a menos que também seja divisível por 400.

let year = 1600

let isDivisibleByFour = year % 4 === 0;
let isDivisibleByOneHundred = year % 100 === 0;
let isDivisibleByFourHundred = year % 400 === 0

let isNotLeapYear =
    !isDivisibleByFour ||
    (
        isDivisibleByFour &&
        isDivisibleByOneHundred &&
        !isDivisibleByFourHundred
    );

console.log(
    isNotLeapYear ? 
    `O ano ${year} não é bissexto` : 
    `O ano ${year} é bissexto`
);
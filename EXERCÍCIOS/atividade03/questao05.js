// 5. Escreva um programa em JavaScript que verifica se um número é um *palíndromo*. 
// Use a estrutura `if-else` para realizar essa verificação.
// Um *palíndromo* é um número que permanece o mesmo quando seus dígitos
// são invertidos. 
// **Dica:** para inverter um numero utilize:
// `parseInt(numero.toString().split('').reverse().join(''))`

const number = 20503;
const reverseNumber = parseInt(number.toString().split('').reverse().join(''));
const isPalindrome = number === reverseNumber;

console.log(
    isPalindrome ?
    `O número ${number} é um palindromo` : 
    `O número ${number} não é um palindromo`
);
// Escreva um programa em JavaScript que verifica se 
//um número é positivo, negativo ou igual a zero. 
//Use a estrutura if-else para realizar essa verificação.
const number = 10;
const isPositiveNumber = number > 0;
const isNegativeNumber = number < 0;

if(isPositiveNumber){
    console.log(`O numero ${number} é positivo.`)
}else if(isNegativeNumber){
    console.log(`O numero ${number} é negativo.`)
}else{
    console.log(`O numero ${number} é igual a zero.`)
}
//Primeira questão
const numeros = [10, 5, 8, 12, 3, 19];
const soma = numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4] + numeros[5];
console.log(soma);


//Segunda questão
const notas = [17, 28, 39, 96, 55];
const media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length;
console.log(media);


//Terceira questão
const valores = [25, 18, 32, 12, 20, 28];
let maior = valores[0];
for (let i = 0; i < valores.length; i++) {
    maior = Math.max(maior, valores[i]);
}
console.log(maior);


//Quarta questão
const matriz = [
    [2, 4, 6],
    [3, 7, 9],
    [5, 8, 10]
];
let produto = matriz[0][0];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        produto *= matriz[i][j];
    }
}
console.log(produto);


//Quinta questão
const notas2 = [
    [17, 28, 11],
    [46, 39, 44],
    [35, 57, 44],
    [48, 39, 88]
];
let total = 0;
let media2;
for (let i = 0; i < notas2.length; i++) {
    for (let j = 0; j < notas2[i].length; j++) {
        total += notas2[i][j];
    }
}
media2 = total / 12;
console.log(media2);


//Sexta questão
const valores2 = [
    [15, 12, 18, 10],
    [14, 9, 16, 11]
];
let menorValor = valores2[0][0];

for (let i = 0; i < valores2.length; i++) {
    for (let j = 0; j < valores2[i].length; j++) {
        menorValor = Math.min(menorValor, valores2[i][j])
    }
}

console.log(menorValor);



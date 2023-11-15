// Temos uma lista de pessoas com seus respectivos nomes, alturas e pesos:
// Crie um função que receba a função a seguir e mostre no console o valor
// do calculo do IMC da pessoa.

// exemplo: `O IMC é Carlos é 40`

// Sendo que o IMC é calculado pela fórmula `peso / altura²`.

// Obs: Utilize `for` ou algum método de array.

const calcularIMC = (pessoas) => {
    let mensagens = [];
    pessoas.forEach(pessoa => {
        const imc = pessoa.peso / pessoa.altura ** 2;
        mensagens.push(`O IMC é ${pessoa.nome} é ${imc}`);
    });

    return mensagens;
}

const pessoas = [
    { nome: 'João', altura: 1.75, peso: 80 },
    { nome: 'Maria', altura: 1.68, peso: 60 },
    { nome: 'Pedro', altura: 1.80, peso: 70 },
    { nome: 'Ana', altura: 1.65, peso: 55 },
    { nome: 'Carlos', altura: 1.90, peso: 100 }
];


console.log(calcularIMC(pessoas));

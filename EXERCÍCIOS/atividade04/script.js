console.clear();
// Escreva um programa em JavaScript que recebe uma cor em inglês e retorna
// o seu nome em português. Utilize a estrutura switch/case para realizar essa verificação.
// As cores podem ser:
// "red" (vermelho), "blue" (azul), "green" (verde), "yellow" (amarelo) e "black" (preto).

const color = "green";
let translatedColor;

switch (color) {
    case "red":
        translatedColor = "vermelho";
        break;

    case "blue":
        translatedColor = "azul";
        break;

    case "green":
        translatedColor = "verde";
        break;

    case "yellow":
        translatedColor = "amarelo";
        break;

    case "black":
        translatedColor = "preto";
        break;

    default:
        translatedColor = "Cor inválida!";
        break;
}

console.log(translatedColor);

// Escreva um programa em JavaScript que recebe um número de 1 a 12 e retorna o mês
// correspondente. Caso seja um número inválido retorna
// "Número inválido.” Utilize a estrutura switch/case para realizar essa verificação.

const number = 12;
let month;

switch (number) {
    case 1:
        month = "Janeiro";
        break;

    case 2:
        month = "Fevereiro";
        break;

    case 3:
        month = "Março";
        break;

    case 3:
        month = "Abril";
        break;

    case 5:
        month = "Maio";
        break;

    case 6:
        month = "Junho";
        break;

    case 7:
        month = "Julho";
        break;

    case 8:
        month = "Agosto";
        break;

    case 9:
        month = "Setembro";
        break;

    case 10:
        month = "Outubro";
        break;

    case 11:
        month = "Novembro";
        break;

    case 12:
        month = "Dezembro";
        break;

    default:
        month = 'Número inválido';
        break;
}

console.log(month);

// Escreva um programa em JavaScript que recebe uma letra do alfabeto e retorna se
// é uma vogal ou uma consoante.
// Utilize a estrutura switch/case para realizar essa verificação.
const letter = 'u';
let result;

switch (letter) {
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'i':
    case 'I':
    case 'o':
    case 'O':
    case 'u':
    case 'U':
        result = "Vogal";
        break;

    default:
        result = "Consoante"
        break;
}

console.log(result);


// Crie um programa em JavaScript que implemente uma calculadora básica.
// A função calculadora receberá dois números como parâmetro e um terceiro
// parâmetro indicando a ação a ser executada. Utilize a estrutura switch/case para
// realizar a operação correta com base na ação fornecida.
// As ações possíveis são: "somar", "subtrair", "dividir" e "multiplicar".
// O resultado da operação deve ser retornado pela função.
// Exemplo de uso: calculadora(5, 3, "somar") deve retornar 8.

function calculator(firstNumber, secondNumber, operation) {
    switch (operation) {
        case "somar":
            return `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`;

        case "subtração":
            return `${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`;

        case "multiplicação":
            return `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`;

        case "divisão":

            try {
                let calcResult = firstNumber / secondNumber;

                if (calcResult == Infinity) {
                    throw "Erro de divisão por zero.";
                } else {
                    return `${firstNumber} / ${secondNumber} = ${calcResult}`;
                }
            } catch (error) {
                return error;
            }

        default:
            return "Operação inválida";
    }
}

console.log(calculator(10, 2, 'somar'));


// Escreva um programa em JavaScript que recebe um número de 1 a 7 e
// retorna o dia da semana correspondente. Utilize a estrutura `switch/case`
// para realizar essa verificação.
// Além disso, implemente uma verificação adicional utilizando `if-else`
// para retornar "Fim de semana" caso o número seja 1 ou 7 (domingo ou sábado),
// e "Dia útil" caso contrário.

// **Exemplo de uso:** `verificarDiaSemana(3)` deve retornar "Quarta-feira, Dia útil".

// **Dica:** Utilize os valores de 1 a 7 para representar os dias da semana, sendo 1
// para domingo, 2 para segunda-feira e assim por diante.

const numberOfTheDay = 7;
let resultDay;

switch (numberOfTheDay) {
    case 1:
        resultDay = 'domingo';
        break;

    case 2:
        resultDay = 'segunda';
        break;

    case 3:
        resultDay = 'terça';
        break;

    case 4:
        resultDay = 'quarta';
        break;

    case 5:
        resultDay = 'quinta';
        break;

    case 6:
        resultDay = 'sexta';
        break;

    case 7:
        resultDay = 'sábado';
        break;

    default:
        resultDay = 'dia inválido';
        break;
}

if(numberOfTheDay >= 1 && numberOfTheDay <= 7){
    if(numberOfTheDay === 1 || numberOfTheDay === 7){
        resultDay += `, final de semana.`;
    }else{
        resultDay += `, dia útil.`;
    }
}

console.log(resultDay);




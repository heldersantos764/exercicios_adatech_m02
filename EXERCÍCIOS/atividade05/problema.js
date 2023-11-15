let isRightNumber = false;
const mysteriousNumber = Math.round(Math.random()*100);
let numberOfAttempts = 0;

while (!isRightNumber) {
    let numberEntered = parseInt(
        prompt('Adivinhe o número entre 0 e 100')
    );

    numberOfAttempts++;

    if(numberEntered > mysteriousNumber){
        alert(`O número é menor que ${numberEntered}`)
    }else if(numberEntered < mysteriousNumber){
        alert(`O número é maior que ${numberEntered}`)
    }else{
        alert(`Parabéns! Você acertou em ${numberOfAttempts} tentativas`)
        isRightNumber = true;
    }
}
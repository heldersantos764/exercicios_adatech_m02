let number = 1;
let primeNumbers = [];
let limit = 100;

while (number <= limit) {
    let divisor = 1;
    let countDivisors = 1;
    let halfOfTheNumber = number / 2;

    while (divisor <= halfOfTheNumber) {
        let isDivisor = number % divisor === 0;
        divisor++;

        if (isDivisor) {
            countDivisors++;

            if(countDivisors > 2){
                break;
            }
        }
    }

    if(countDivisors === 2){
        primeNumbers.push(number);
    }

    number++;
}

console.log(primeNumbers);
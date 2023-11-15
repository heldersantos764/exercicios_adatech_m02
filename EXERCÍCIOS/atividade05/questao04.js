const limit = 20
let count = 0;
let penultimateNumber = 0;
let lastNumber = 1;
let sequence = []

while (count < limit) {
    if(count > 1){
        let aux = penultimateNumber;
        penultimateNumber = lastNumber;
        lastNumber = aux + lastNumber;
        sequence.push(lastNumber);
    }else{
        sequence.push(count);
    }
    count++;
}

console.log(sequence);
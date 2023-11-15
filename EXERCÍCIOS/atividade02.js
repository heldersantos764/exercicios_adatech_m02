console.clear();

//1. Criando uma lista de contatos
const contato = [
    {
        nome: "Antonio",
        telefone: "(88) 9 8844-5544",
        endereco: {
            nomeRua: "Teste 01",
            numero: "150A",
            bairro: "Varjota"
        },
        dataDeNascimento: "15/02/2000"
    },
    {
        nome: "Maria",
        telefone: "(88) 9 8844-5544",
        endereco: {
            nomeRua: "Teste 02",
            numero: "200A",
            bairro: "Centro"
        },
        dataDeNascimento: "23/04/1995"
    }
];



//2. Percorrendo a lista de contato
contato.forEach(contato => {
    console.log('=================================================================================================');
    const frase = `${contato.nome}, telefone ${contato.telefone}, mora na rua ${contato.endereco.nomeRua}, no número ${contato.endereco.numero}, no bairro ${contato.endereco.bairro}, nascido na data de ${contato.dataDeNascimento}`;
    console.log(frase);
})




//3. Criando estrutura de números
//laço de repetição 01
for(let i = 0; i < 5; i++){
    let result = '';
    for(let j = 0; j <= i; j++){
        result += (j+1);
    }
    console.log(result);
}

console.log('-------------------------------------------------------------')
//laço de repetição 02
for(let i = 5; i > 0; i--){
    let count = 1;
    let result = '';
    for(let j = i; j > 0; j--){
        result += count;
        count++;
    }
    console.log(result);
}

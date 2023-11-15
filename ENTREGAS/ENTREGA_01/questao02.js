// Temos a lista de empregados com seus respectivos nomes e salários:
// Utilize o método `some` para verificar se pelo menos um dos empregados
// tem salário maior ou igual a R$ 1.500,00.

// Utilize o método `some` novamente para verificar se pelo menos
// um dos empregados tem salário menor ou igual a R$ 1.000,00.

// Obs: Pode utilizar o `for` .

const some = (empregados, isMaiorIgual, salarioComparacao) => {

    let quantidade = 0;

    for(let i = 0; i < empregados.length; i++){
        if(isMaiorIgual){
            if(empregados[i].salario >= salarioComparacao){
                quantidade++;
            }
        }else{
            if(empregados[i].salario <= salarioComparacao){
                quantidade++;
            }
        }
    }

    return quantidade;
}


console.clear();

const empregados = [
    { nome: 'João', salario: 1200 },
    { nome: 'Maria', salario: 1500 },
    { nome: 'Pedro', salario: 1800 },
    { nome: 'Ana', salario: 1400 },
    { nome: 'Carlos', salario: 2000 }
  ]

  console.log("verificar se pelo menos um dos empregados tem salário maior ou igual a R$ 1.500,00");
  console.log(some(empregados, true, 1500));

  console.log("verificar se pelo menos um dos empregados tem salário menor ou igual a R$ 1.000,00");
  console.log(some(empregados, false, 1000));
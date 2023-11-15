// Crie uma função que receba como parâmetro a lista de hotifrutis 
// abaixo que tem três tipos: `frutas`, `legumes` e `verduras`, faça com que essa função
// retorne o número de itens de cada um desses tipos.
// Sendo que:

// fruta → banana, maçã, abacaxi, melancia, laranja, limão.
// legume → cenoura, batata, brócolis, abóbora, tomate, alho-poró.
// verdura → alface, espinafre, rúcula, couve, agrião, acelga.

const contarItens = (hotifrutis) => {

    const quantHortifrutis = {
        frutas: 0,
        legumes: 0,
        verduras: 0
    }

    const tipoFruta = ['banana', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão'];
    const tipoLegume = ['cenoura', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró'];
    const tipoVerduta = ['alface', 'espinafre', 'rúcula', 'couve', 'agrião', 'acelga'];

    hotifrutis.forEach(elemento => {
        if(tipoFruta.includes(elemento)){
            quantHortifrutis.frutas++;
        }else if(tipoLegume.includes(elemento)){
            quantHortifrutis.legumes++;
        }else if(tipoVerduta.includes(elemento)){
            quantHortifrutis.verduras++;
        }
    });

    return quantHortifrutis;
}

console.clear();

const hortifrutis = ['banana', 'agrião', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão', 'cenoura', 'melancia', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró', 'alface', 'espinafre', 'rúcula', 'couve', 'acelga', 'maçã', 'batata'];
console.log(contarItens(hortifrutis));
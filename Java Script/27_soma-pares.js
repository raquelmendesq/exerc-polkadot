let lista = [1, 2, 4, 5, 6]
let resultado = 0;

function somarPar() {
    for(let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 == 0) {
            resultado += lista[i]
        }
    }
    return console.log(`A soma dos números pares em: '[${lista}]' é: ${resultado}`);
}

somarPar()
let vogais = "aeiouAEIOU"

function contagemvogais(str) {
    let contagem = 0
    for(let i = 0; i < str.length; i++) {
        if(vogais.includes(str[i])) {
            contagem += 1;
        }
    }
    return contagem;
}

console.log(`Aparecem ${contagemvogais("Olá")} vogais na sua frase.`)

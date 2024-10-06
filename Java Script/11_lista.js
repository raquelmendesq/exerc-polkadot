let lista = ['leite',7, 'uva','café']

function verificaNumeroLista(lista) {
    return lista.some(item => typeof item === 'number');
}

console.log(verificaNumeroLista(lista))

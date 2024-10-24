const listaNumeros = [1,2,3];

let resultado = 0;
for (let i = 0; i < listaNumeros.length; i++) {
    resultado = resultado + listaNumeros[i];
}
console.log('for', resultado);

let resultadoReduce1 = listaNumeros.reduce(function (valorAnterior, valorAtual) {
    return valorAnterior + valorAtual;
}, 0);
console.log('resultadoReduce1', resultadoReduce1);

let resultadoReduce2 = listaNumeros.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual, 0);
console.log('resultadoReduce2', resultadoReduce2);
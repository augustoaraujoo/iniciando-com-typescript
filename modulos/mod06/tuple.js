var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var pessoa;
pessoa = ['augusto', 33];
console.log(pessoa[0]);
//* Lista heterogênea de Tupla : 
var lista = ["a", "b", "c"];
console.log(__spreadArray([], lista, true), ["dd", "ddsd"]);
//? parâmetros + argumentos com Tuplas : 
var opa = 'olá mundo';
function hellow(params) {
    return console.log(params.split('').reverse().join(''));
}
hellow(opa);
//! tuplas dentro das funçôes : 
function listarPessoas(nomes, idades) {
    return __spreadArray(__spreadArray([], nomes, true), idades, true);
}
var resultadoDelistarPessoas = listarPessoas(['jurema', 'Pedrop'], [12, 15]);
console.log(resultadoDelistarPessoas);
function criarPessoa() {
    var nome = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nome[_i] = arguments[_i];
    }
    return __spreadArray([], nome, true);
}
console.log(criarPessoa('Carlos', 'Rosa'));

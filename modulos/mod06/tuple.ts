// ➡️ exemplo básico retornando a matrix 0 
let pessoa: [nome: string, idade: number];
pessoa = ['augusto', 33]
console.log(pessoa[0]);

//* Lista heterogênea de Tupla : 

let lista: [string, ...string[]] = ["a", "b", "c"]
console.log([...lista], ["dd", "ddsd"]);

//? ➡️ parâmetros + argumentos com Tuplas : 
let opa: string = 'olá mundo'
function hellow(params: string) {
    return console.log(params.split('').reverse().join(''));
}
hellow(opa)

//!➡️ tuplas dentro das funçôes : 
function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades]
}
let resultadoDelistarPessoas = listarPessoas(['jurema', 'Pedrop'], [12, 15])
console.log(resultadoDelistarPessoas);

// ➡️ Labeled Tuples com Spread Operator numa Fução : 
type Nome =
    | [primeiroNome: string, sobrenome: string]
    | [primeiroNome: string, nomeMeio: string, sobrenome: string]
function criarPessoa(...nome: Nome) {
    return [...nome]
}
console.log(criarPessoa('Carlos','Rosa'));

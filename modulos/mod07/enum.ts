enum Idioma {
    Portugues = 'PT-BR',
    Espanhol = 'ES',
    China = 'VV'
}
console.log(Idioma.China);

//!  Como podemos acessar um valor de um Enum com uma chave: (usando o const)

const enum Comida {
    Salada = 'Salda',
    Pizza = 'Pizza',
    Torta = 'Torta'
}
function comidas(c: Comida) {
    return 'comidas legais'
}
console.log(comidas(Comida.Pizza));


enum Tarefa {
    Todo,
    Progress,
    Done
}
const tarefaConcluida = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Tarefa ok'
}
if (tarefaConcluida.status === Tarefa.Done) {
    console.log('God');
}
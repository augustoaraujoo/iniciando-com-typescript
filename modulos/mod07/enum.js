var Idioma;
(function (Idioma) {
    Idioma["Portugues"] = "PT-BR";
    Idioma["Espanhol"] = "ES";
    Idioma["China"] = "VV";
})(Idioma || (Idioma = {}));
console.log(Idioma.China);
function comidas(c) {
    return 'comidas legais';
}
console.log(comidas("Pizza" /* Pizza */));
//*
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["Todo"] = 0] = "Todo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
var tarefaConcluida = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Tarefa ok'
};
if (tarefaConcluida.status === Tarefa.Done) {
    console.log('God');
}

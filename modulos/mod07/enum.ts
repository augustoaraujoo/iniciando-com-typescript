enum Idioma{
    Portugues = 'PT-BR',
    Espanhol = 'ES',
    China = 'VV'
}
console.log(Idioma.China);

//!  Como podemos acessar um valor de um Enum com uma chave: (usando o const)

const enum Comida {
    Salada,
    Pizza,
    Torta
}
function comidas(c:Comida) {
    return 'comidas legais'
}
console.log(comidas(Comida.Pizza));

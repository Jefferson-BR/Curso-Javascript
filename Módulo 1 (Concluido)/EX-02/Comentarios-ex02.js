// Cometario em uma única linha
/*Comentario em varias linhas*/

/*

- Quando usar var, let ou const:

VAR --> Antes da introdução do `let` e `const` no ES6 (ECMAScript 2015), `var` era a única maneira de declarar variáveis em JavaScript. No entanto, o escopo de uma variável declarada com `var` é definido pelo escopo da função em que ela está contida. Isso significa que uma variável declarada com `var` pode ser acessada fora do bloco de código em que foi declarada, o que pode levar a comportamentos inesperados. Portanto, é recomendado evitar o uso de `var` em favor de `let` e `const`.

LET --> O `let` também permite declarar variáveis, mas com escopo de bloco. Isso significa que uma variável declarada com `let` só pode ser acessada dentro do bloco de código em que foi declarada. Essa é uma melhoria em relação ao `var`, pois ajuda a evitar bugs e torna o código mais legível. Em geral, é recomendado usar `let` quando você precisa reatribuir valores a uma variável.

CONST --> O `const` é usado para declarar constantes, ou seja, valores que não podem ser alterados após a sua atribuição inicial. Uma vez que uma variável é declarada com `const`, não é possível atribuir um novo valor a ela. Isso torna o código mais seguro e ajuda a evitar erros de programação. É recomendado usar `const` sempre que você sabe que o valor da variável não será alterado.


OBS: Se você estiver desenvolvendo para navegadores modernos, é recomendado usar `let` e `const`, Se você precisar dar suporte a navegadores mais antigos, pode ser necessário usar `var`.

*/
/*

- Else if:

O "else if" é usado quando existem mais de duas possibilidades de resultados diferentes que podem ocorrer. Ele é uma extensão do "if-else" e pode ser encadeado várias vezes para adicionar quantas condições forem necessárias.

Se a condição anterior for falsa, a próxima condição será avaliada. Apenas o bloco de código correspondente à primeira condição verdadeira será executado. Caso nenhuma das condições seja verdadeira, o bloco de código dentro do "else" será executado.

O "else" no final é opcional e é executado somente se todas as condições anteriores forem falsas.


- Switch:

Um switch em JavaScript é uma estrutura de controle que permite avaliar uma expressão e executar diferentes ações com base no valor dessa expressão.

A expressão é avaliada uma vez e seu valor é comparado com os valores especificados nos (CASES). Se houver uma correspondência, o código dentro do (CASE) correspondente será executado. A instrução `break` é usada para sair do switch após um (CASE) ser correspondido e executado. Se nenhum (CASE) corresponder à expressão, o código dentro do bloco `default` será executado.

* Importante!

! Se por acaso no Switch não for adicionado (BREAK), vai acontecer uma coisa chamada "fall-through" ou "efeito cascata".

! O código continuará sendo executado nos (CASES) seguintes, mesmo que eles não correspondam à expressão.

*/
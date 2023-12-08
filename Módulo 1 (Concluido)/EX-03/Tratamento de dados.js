/*

- Em JavaScript o (+) serve tanto para adição quanto para concatenação

- number + number = Adição
- string + string = Concatenação

*/

// Exemplo de Concatenação:
var numero1 = prompt("Digite um número: ")
var numero2 = prompt("Digite outro número: ")
var soma = numero1 + numero2
alert("Resultado da concatenação fica: " + soma)



// Exemplo de Adição:
var numero3 = Number(prompt("Digite um número: "))
var numero4 = Number(prompt("Digite outro número: "))
var resultado = numero3 + numero4
alert("Resultado da adição fica: " + resultado)

// Exemplo de Conversão de Number para String

let Numero1 = Number(prompt("Digite um número para converte-lo em String: "))

let Conversao1 = String(Numero1)
document.write("O primeiro dado digitado é do tipo: " + typeof(Conversao1) + "<br><br>")

// Outro Exemplo de Conversão de Number para String

let Numero2 = Number(prompt("Digite outro número para converte-lo em String: "))
let Conversao2 = Numero2.toString()
document.write("O segundo dado digitado é do tipo: " + typeof(Conversao2))
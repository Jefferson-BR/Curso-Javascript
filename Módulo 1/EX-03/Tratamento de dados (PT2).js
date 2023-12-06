let nome = prompt("Qual o seu nome? ")
let idade = Number.parseInt(prompt("Qual a sua idade? "))
let peso = Number(prompt("Quanto você pesa? "))
let pais = prompt("Em qual pais você mora? ")

alert(`Olá, ${nome} você tem ${idade} anos! seu peso atual é: ${peso.toFixed(2)}, e atualmente você mora no ${pais}`)

document.write("Seu nome escrito contém: " + nome.length + " letras" + "<br>")
document.write("Seu nome escrito em letras Maiúsculas fica assim: " + nome.toLocaleUpperCase() + "<br>")
document.write("Seu nome escrito em letras minúsculas fica assim: " + nome.toLocaleLowerCase() + "<br>")
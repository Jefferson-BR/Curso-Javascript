let velocidadePermitida = 80
let velocidade = 120

console.log(`A Velocidade que Você passou no radar foi de ${velocidade}KM/H `)
if (velocidade > velocidadePermitida * 1.5){
    console.log('Você ultrapassou mais do que 50% da velocidade permitida! Sua multa é de: R$ 195,23 + 5 Pontos na CNH')
}
else if (velocidade > velocidadePermitida * 1.21){
    console.log('Você ultrapassou mais do que 21% da velocidade permitida! Sua multa é de: R$ 195,23 + 5 Pontos na CNH')
}
else if (velocidade > 80){
    console.log('Você foi multado por excesso de velocidade! Sua multa é de: R$ 130,16 + 4 Pontos na CNH')
}
else{
    console.log("Use sempre cinto de segurança, Boa viagem!")
}

var pais = 'brasil'
console.log(`O seu pais é: ${pais}`)
if(pais.toLowerCase() === 'brasil'){
    console.log('Portanto Você é Brasileiro!')
}
else{
    console.log("Portanto Você é Estrangeiro!")
}
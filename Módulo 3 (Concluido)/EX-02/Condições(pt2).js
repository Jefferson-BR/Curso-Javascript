var IdadeVotacao = Number(prompt("Qual a sua idade? Digite: "))
    document.write(`Você tem ${IdadeVotacao} anos.<br>`)
    if (IdadeVotacao < 16){
        document.write('Você ainda Não pode Votar')
    }
    else if (IdadeVotacao < 18 || IdadeVotacao > 65){
        document.write('Seu voto é opcional')
    }
    else{
        document.write('Seu voto é obrigatório')
}

var data = new Date()
var coleta = data.getDate() + "-" + (data.getMonth() + 1) + "-" + data.getFullYear() + " " + data.getHours().toString().padStart(2, '0') + ":" + data.getMinutes().toString().padStart(2, '0')
console.log(`A data de hoje é: ${coleta}`)


var obter_horas = new Date()
    var horas = obter_horas.getHours()
        console.log(`Agora são exatamente ${horas} horas.`)
            if (horas >= 6 && horas <= 12){
                console.log("Bom dia!")
            }
            else if(horas >= 13 && horas <= 18){
                console.log("Boa Tarde!")
            }
            else if (horas >= 19 && horas <= 0){
                console.log("Boa noite!")
            }
            else if (horas >= 0 && horas <= 5){
                console.log("Boa Madrugada!")
            }

var dia = new Date()
var diaSemana = dia.getDay()

switch (diaSemana){
    case 0:
        console.log('Hoje é Domingo')
    break
    case 1:
        console.log('Hoje é Segunda-feira')
    break
    case 2:
        console.log('Hoje é Terça-feira')
    break
    case 3:
        console.log('Hoje é Quarta-feira')
    break
    case 4:
        console.log('Hoje é Quinta-feira')
    break
    case 5:
        console.log('Hoje é Sexta-feira')
    break
    case 6:
        console.log('Hoje é Sábado')
    break
    default:
        console.log('Erro! Dia invalido')
    break
}

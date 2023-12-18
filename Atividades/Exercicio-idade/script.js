if (window.location.hash){ // Hash Da URL Desativado
    window.location.hash = ""
}

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var input_ano = document.getElementById('ano')
    var resultado = document.querySelector('div#resultado')
    if (input_ano.value.length == 0 || input_ano.value > ano ){
        alert("[ERRO] Verifique os dados e tente novamente!")
    }
    else{
        var input_sex = document.getElementsByName('radsex')
        var idade = ano - Number(input_ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(input_sex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'img/crianca h.jpg')
            }
            else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'img/jovem h.jpg')
            }
            else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'img/adulto.jpg')
            }
            else{
                // Idoso
                img.setAttribute('src', 'img/idoso.jpg')
            }
        }
        else if (input_sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'img/crianca m.jpg')
            }
            else if (idade < 23){
                // Jovem
                img.setAttribute('src', 'img/jovem m.jpg')
            }
            else if (idade < 60){
                // Adulto
                img.setAttribute('src', 'img/adulta.jpg')
            }
            else{
                // Idoso
                img.setAttribute('src', 'img/idosa.jpg')
            }
        }
        resultado.innerHTML = `Detectamos um(a) ${genero} com ${idade} ano(s).`
        resultado.appendChild(img)
    }
}
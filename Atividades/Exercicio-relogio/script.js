if (window.location.hash){ // Hash Da URL Desativado
    window.location.hash = ""
}
function carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementsByClassName('img-dia')[0]
    var data = new Date()
    var hora = data.getHours()
    msg.textContent = `Agora são exatamente ${hora} Horas.`
    if (hora >= 0 && hora < 12){
        imagem.src = 'img/amanhecer.jpg'
        document.body.style.background = '#e2cd9f'
    }
    else if (hora >= 12 && hora <= 18){
        imagem.src = 'img/entardecer.jpg'
        document.body.style.background = '#b9846f'
    }
    else{
        imagem.src = 'img/anoitecer.jpg'
        document.body.style.background = '#515154'
    }
}
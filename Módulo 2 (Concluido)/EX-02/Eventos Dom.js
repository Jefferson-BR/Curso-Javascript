var interacao = document.getElementById('box')
interacao.addEventListener('click', click_event)
interacao.addEventListener('mouseenter', enter_event)
interacao.addEventListener('mouseout', out_event)

function click_event(e){
    interacao.style.backgroundColor = "darkcyan"
    interacao.style.textAlign = "center"
    interacao.style.lineHeight = '300px'
    interacao.style.color = "white"
    interacao.textContent = 'Evento de Click Funcionando!'
}
function enter_event(e){
    interacao.style.backgroundColor = "darkred"
    interacao.style.textAlign = "center"
    interacao.style.lineHeight = '300px'
    interacao.style.color = "white"
    interacao.textContent = 'Evento de Entrada Funcionando!'
}
function out_event(e){
    interacao.style.backgroundColor = "darkgreen"
    interacao.style.textAlign = "center"
    interacao.style.lineHeight = '300px'
    interacao.style.color = "white"
    interacao.textContent = 'Evento de Saida Funcionando!'
}


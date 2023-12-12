var titulo = document.getElementsByTagName('h1')[0]
titulo.innerHTML = "Titulo Escrito Pelo JS"

var paragrafo = document.getElementById('second-text')
paragrafo.style.color = "purple"
paragrafo.textContent = "Cor do paragrafo alterada pelo JS"

var paragrafo2 = document.getElementsByName('primary-text')[0]
paragrafo2.style.fontSize = "40px"
paragrafo2.style.fontWeight = "Bolder"
paragrafo2.style.fontFamily = "Arial"
paragrafo2.innerHTML = "Texto alterado pelo JS"

var titulo2 = document.getElementsByClassName('second-title')[0]
titulo2.textContent = "Segundo Titulo Escrito pelo JS"

var lista_manual = document.querySelector('li')
lista_manual.textContent = "Repetição"
lista_manual.style.color = 'blue'

var lista = document.querySelectorAll('li')[3]
lista.textContent = 'Repetição'
lista.style.color = 'red'

for (var add = 0; add < lista.length; add++) {
      lista[add].textContent = "Repetição";
 }


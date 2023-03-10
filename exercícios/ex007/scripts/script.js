var a = window.document.getElementById('area')
function clicar() {
    a.innerText = 'Você clicou!'
    a.style.color = 'blue'
    a.style.transition = '10s'
}

function entrar() {
    a.innerText = 'Entrou!'
    a.style.color = 'green'
    a.style.transition = '10s'
}

function sair() {
    a.innerText = 'Saiu'
    a.style.color = 'purple'
    a.style.transition = '10s'
}
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    msg.style.color = 'black'
    if (hora == 0 && hora < 12) {
        img.src = 'imagens/imagem de manhã.jpg'
    }
    else if(hora <=  12 && hora <= 18){
        img.src = 'imagens/imagem de noite.jpg'
    }
    else {
        img.src = 'imagens/imagem de noite.jpg'
    }
}

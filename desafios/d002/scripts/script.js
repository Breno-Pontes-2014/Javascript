function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano');
    var res = document.querySelector('div#res');
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Os dados estão incorretos, verifique-os e tente novamente.');
    } else {
        var sexo = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (sexo[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 3) {
                // Bebê
                img.setAttribute('src', 'imagens/imagem de bebê homem.jpg');
                img.style.width = "500px"
                img.style.height = "500px"
            }
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/imagem de criança homem.jpg');
                img.style.width = "500px"
                img.style.height = "500px"
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/imagem de jovem homem.jpg');
                img.style.width = "500px"
                img.style.height = "500px"
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/imagem de adulto.jpg');
                img.style.width = "500px"
                img.style.height = "500px"
            } else {
                // Idoso
                img.setAttribute('src', 'imagem/imagem de idoso.jpg');
                img.style.width = "500px"
                img.style.height = "500px"
            }
        } else {
            genero = 'Mulher';
            if (idade >= 0 && idade < 3) {
                // Bebê
                img.setAttribute('src', 'imagens/imagem de bebê mulher.jpg');
                img.style.width = "500px"
                img.style.height = "500px"
            }
            else if(idade < 18){
                // Criança
                img.setAttribute('src', 'imagens/Imagem de criança mulher.jpg');
                img.style.width = "500px"
                img.style.height = "500px"
            }
            else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/imagem de jovem mulher.jpg');
                img.style.width = "500px"
                img.style.height = "500px"
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/imagem de adulta.jpg');
                img.style.width = "500px"
                img.style.height = "500px"
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/imagem de idosa.jpg');
                img.style.width = "500px"
                img.style.height = "500px"
            }
        }
        res.style.textAlign = 'left';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}

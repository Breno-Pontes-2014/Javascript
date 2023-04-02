function contar() {
    // Obter os valores do formulário
    var inicio = document.getElementById("txtinício")
    var passo = document.getElementById("txtpasso")
    var fim = document.getElementById("txtfim")
    var res = document.getElementById('res')
    // Verificar se os valores são válidos
    if (inicio.value.length == 0 || passo.value.length == 0 || fim.value.length == 0) {
        window.alert(`Faltam dados, impossível contar.`)
    } else {
        res.innerHTML = "Contando: "
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert("Passo inválido")
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

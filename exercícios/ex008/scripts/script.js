function somar() {
    var tn1 = window.document.getElementsByName('txtn1')
    var tn2 = window.document.getElementsByName('txtn2')
    var n1 = tn1.value
    var n2 = tn2.value
    var s = n1 + n2
    var res = window.document.getElementById('res')
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
}
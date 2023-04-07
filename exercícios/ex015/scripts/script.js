let amigo = {nome: 'José',sexo: 'M', peso: 90.9,engordar(p=0){
    console.log(`${amigo.nome} engordou.`)
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)
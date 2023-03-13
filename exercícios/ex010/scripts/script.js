var idade = 16
if (idade < 16){
    console.log('Você não pode votar.')
}
else if (idade < 18 || idade > 65){
    console.log('Você tem voto opcional')
}
else {
    console.log('Você tem voto obrigatório.')
}
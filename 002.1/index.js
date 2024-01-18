let nome 
let idade
let temCarta = false
let temCarro = false

//

nome = prompt('Digite o seu nome:')
idade = prompt('Digite a sua idade:')
let opçãoCarta = prompt('Você tem carta de motorista? sim/não')
if (opçãoCarta == 'sim'){
    temCarta = true
}
let opçãoCarro = prompt('Você tem carro? sim/não')
if (opçãoCarro == 'sim'){
    temCarro = true
}

//

if (idade < 18 || !temCarta){
    console.log(nome + ",Voce não pode dirigir!")
}else if (idade >=18 && temCarta && !temCarro){
    console.log(nome + ",voce pode digirir mas nao tem carro!")
}else{
    console.log(nome + ',voce sera motorista!')
}

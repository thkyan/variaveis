const temFome = prompt('você tem fome? sim/não')
const temDinheiro = prompt('você tem dinheiro? sim/não')
const temReastauranteAberto = prompt('tem algum restaurante berto? sim/não')

//

if ( temFome === 'não' || temDinheiro === 'não'){
    console.log('Hoje a janta será em casa!');
}else if ( temFome === 'sim' && temReastauranteAberto === 'sim'){
    console.log('A janta será no seu restaurante preferido!');
}else {
    console.log('Peça um delivery!')
}
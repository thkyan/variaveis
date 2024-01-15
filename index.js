//declaração de váriaveis
let nome = ''
let idade = 0
let altura = 0
let peso = 0

//solicitando informacao ao usuario e atribuindo os valores as variaveis
nome = String(prompt("Digite seu nome: "))
idade = parseInt(prompt("Digite sua idade: "))
altura = parseFloat(prompt("Digite sua altura: "))
peso = parseFloat(prompt("Digite seu peso: "))

//calculando o ano que a pessoa nasceu e o IMC
let anoNasc = 0
anoNasc = 2023 - idade

let imc = 0
imc = peso/(altura*altura)
imcFix = imc.toFixed(1)

//exibindo as informações no console
console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNasc + " tem " + altura + ", e seu peso é " + peso + " e o imc é " + imcFix + " kg/m ")
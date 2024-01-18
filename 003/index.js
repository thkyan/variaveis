let numeroUm = Number(prompt("Insira um numero:"))
let numeroDois = Number(prompt("Insira um outro numero:"))
let operação = prompt("Escolha uma operação: adição, subtração, multiplicação ou divisão.")
let resultado = 0
//

switch (operação) {
    case "adição": 
        resultado = numeroUm + numeroDois 
        console.log(`A soma dos números é: ${resultado}.`)
        break;
    case "subtração":
        resultado = numeroUm - numeroDois
        console.log(`A subtração dos numeros é: ${resultado}.`)
        break;
    case "multiplicação":
        resultado = numeroUm * numeroDois
        console.log(`A multiplicação dos numeros é: ${resultado}.`)
        break;
    case "divisão":
        resultado = numeroUm / numeroDois
        console.log(`A divisão dos numeros é: ${resultado}.`)
        break;

    default: 
        console.log("operação invalida")
        break;
}
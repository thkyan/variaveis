let opcao = prompt("escolha um número: abastecer com gasolina = 1, com alcool = 2 ou calibrar os pneus = 3.")
let resultado = 0
//

switch (opcao) {
    case "1":
        valor = Number(prompt("Qual valor deseja?"))
        resultado = valor / 5
        console.log(`Foi abastecido ${resultado} litros de gasolina`)
        break;

    case "2": 
        valor = Number(prompt("Qual valor deseja?"))
        resultado = valor / 3
        console.log(`Foi abastecido ${resultado} litros de alcool`)  
        break;

    case "3":
        console.log("pneus calibrados com sucesso!")
    default:
        console.log("opção invalida!!!!")
        break;
}
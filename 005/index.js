let somaNotas = 0
let totalAlunos = 0
let totalHomens = 0
let mulheresNotasAcimaSete = 0
let maiorNotaHomens = 0
let desejaCadrastar = true

while (totalAlunos < 10) {
    let nota = parseFloat(prompt("Digite a sua nota?"));
    let sexo = prompt("Insira seu sexo: (m para masculino e f para feminino)")
    
    somaNotas+=nota 
    totalAlunos++

    if (sexo === "m") {
        totalHomens++
        if (nota > maiorNotaHomens){
            maiorNotaHomens = nota
        }        
    }
    if (sexo === "f" && nota > 7) {
        mulheresNotasAcimaSete++
    }
     desejaCadrastar = confirm("DESEJA CADRASTAR MAIS UMA NOTA?")
     if (!desejaCadrastar) {
        break;
     }
}
     const mediaGeral = somaNotas/totalAlunos
    
     console.log(`A media geral é: ${mediaGeral}
     Quantos homens enviaram a nota: ${totalHomens}
     Quantas mulheres tiveram a nota acima de sete: ${mulheresNotasAcimaSete}
     Qual a maior nota entre os homens: ${maiorNotaHomens}`)


    

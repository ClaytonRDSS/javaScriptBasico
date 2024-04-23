const prompt = require('prompt-sync')({sigint: true})

var continuar = "sim"
var nome = ""
var salarioBruto = 0
var quantidadeDependentes = 0
var aliquota = 0
var deducao = 0
var impostoARecolher = 0
var descontoPorDependente = 189.59
var salarioLiquido = 0

//i­ndice 0 = total salário bruto, Indice 1 = total imposto a recolher, I­ndice 2 = total salário li­quido
var dadosAcumulados = [0, 0, 0]

while(continuar == "sim" || continuar == "s" || continuar == "") {

    nome = prompt("Informe o nome do profissional: ")

    salarioBruto = Number(prompt("Informe o salário bruto: "))

    quantidadeDependentes = Number(prompt("Informe a quantidade de dependentes: "))   

    if(salarioBruto >= 0 && salarioBruto <= 1903.98) {
        aliquota = 0
        deducao = 0
    } else if(salarioBruto >= 1903.99 && salarioBruto <= 2826.65) {
        aliquota = 0.075
        deducao = 142.80
    } else if(salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
        aliquota = 0.15
        deducao = 354.80
    } else if(salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
        aliquota = 0.225
        deducao = 636.13
    } else {
        aliquota = 0.275
        deducao = 869.36
    }

    impostoARecolher = (salarioBruto * aliquota) - deducao - (quantidadeDependentes * descontoPorDependente)
    salarioLiquido = salarioBruto - impostoARecolher

    
    dadosAcumulados[0] = dadosAcumulados[0] + salarioBruto
    dadosAcumulados[1] = dadosAcumulados[1] + impostoARecolher
    dadosAcumulados[2] = dadosAcumulados[2] + salarioLiquido
    
    console.log(`Calculo de pagamento do(a) ${nome}:`)
    console.log(`Salário bruto: ${salarioBruto.toFixed(2)}, imposto a recolher: R$ ${impostoARecolher.toFixed(2)}, Salário liquido: R$ ${salarioLiquido.toFixed(2)}`)

    continuar = prompt("Deseja realizar uma nova entrada?: ")
}



console.log("Valores totais da folha de pagamento:")
console.log(`Soma salário bruto:  R$ ${dadosAcumulados[0].toFixed(2)}`)
console.log(`Soma imposto a recolher:  R$ ${dadosAcumulados[1].toFixed(2)}`)
console.log(`Soma salário liquido:  R$ ${dadosAcumulados[2].toFixed(2)}`)

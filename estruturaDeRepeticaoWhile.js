// requerimento para o usuário fazer a entrada dos dados via terminal. 
const prompt = require('prompt-sync')({sigint: true})

let continuar = "sim"
let total = 0
let valor = 0


// Estrutura de repetição (WHILE/ENQUANTO)
while (continuar == "sim" || continuar == "" || continuar == "s") {
    valor = Number(prompt("Digite um Valor: "))
    total = total + valor
    
    continuar = prompt("Deseja Continuar sim/não? ")
}

console.log(`Valor Total: ${total.toFixed(2)}`)
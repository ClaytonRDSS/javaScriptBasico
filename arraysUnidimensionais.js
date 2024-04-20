let prompt = require('prompt-sync')({sigint: true})


let nomes = []

/*
nomes[0] = "clayton"
nomes[1] = "clayton"
nomes[2] = "clayton"
nomes[3] = "clayton"
nomes[4] = "clayton"
*/

let qtdNomes = Number(prompt("Quantos Nomes você deseja informar: "))

for (let i = 0; i < qtdNomes; i++) {
    nomes[i] = prompt(`Informe o ${i + 1}º nome: `)
}

console.log("----------------------------")
console.log("Nomes Digitado.")
console.log(``)
for (let i = 0; i < qtdNomes; i++) {
    console.log(nomes[i])
}
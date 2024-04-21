let prompt = require('prompt-sync')({ sigint: true })

// Criando o Array
let pessoas = []

console.log("-------------------------")
for (let i = 0; i < 3; i++) {
    // Criando as Colulas do array a cada interação
    pessoas[i] = []

    for (let j = 0; j < 3; j++) {
        if(j == 0 ){
            pessoas[i][j] = prompt("Digite seu Nome: ")
        } else if (j == 1) {
            pessoas[i][j] = prompt("Digite seu Genero: ")
        } else if (j == 2) {
            pessoas[i][j] = Number(prompt("Digite sua Idade: "))
        }
    }
console.log("-------------------------")
}

//? Exibindo os dados no console
for (i = 0; i < pessoas.length; i++) {
    for (j = 0; j < pessoas[i].length; j++) {
        console.log(pessoas[i][j])
    }
    console.log("--------------------")
}
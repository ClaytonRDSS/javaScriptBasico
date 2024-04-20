const prompt = require('prompt-sync')({sigint: true})

/*
Calculadora Aritimetica

let numero = Number(prompt("Digite um número: "))

for (let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero + i}`)
    console.log(`${numero} x ${i} = ${numero - i}`)
    console.log(`${numero} x ${i} = ${numero * i}`)
    console.log(`${numero} x ${i} = ${numero / i}`)
}
*/

// Calculo da media da quantidade de notas. 
let soma = 0
let media = 0
let nota = 0

let qtdeNotas = Number(prompt("Informe a quantidade de notas a serem lidas: "))

for (let i = 0; i < qtdeNotas; i++) {
    nota = Number(prompt(`Digite a ${i + 1}º nota: `))
    soma = soma + nota
}

media = soma / qtdeNotas

console.log(`Media das notas é: ${media.toFixed(2)}`)
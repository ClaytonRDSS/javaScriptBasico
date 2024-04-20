// Entrada de Dados via terminal

const prompt = require('prompt-sync')({sigint: true})


console.log("Calculadora IMC")

var nome = prompt("Digite seu nome: ")
var altura = Number(prompt("Informe sua Altura: "))
var peso = Number(prompt("Informe se peso: "))

console.log(typeof(nome))
console.log(typeof(altura))
console.log(typeof(peso))

var resultado = peso / (altura * altura)

console.log(`Seu IMC é: ${resultado.toFixed(2)}`)
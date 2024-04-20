// Declaração de variaveis (var, let e const); 

// demostração de tipagem dinamica no javaScript;

var descricaoVaga // undefined (não definido)
descricaoVaga = "Programador JavaScipt Pleno" // (sting)
var quantidade = 10 // number (integer/int)
var salario = 6200.75 // number (Float)
var abertoParaInscricao = true // boolean (true/false)


// Script para ver o tipo da variavel typeof(nomeDaVariavel);
console.log(typeof(descricaoVaga))
descricaoVaga = "Programador JavaScipt Pleno"
console.log(typeof(descricaoVaga))
console.log(typeof(quantidade))
console.log(typeof(salario))
console.log(typeof(abertoParaInscricao))


// concatenação de variaveis com textos usando (+)
console.log("Descrição da Vaga: " + descricaoVaga)
console.log("------------------------------------")


// concatenação de variaveis com textos usando (destructor = {})
// template literals (template strings)
console.log(`Descricao da Vaga: ${descricaoVaga} 
Salário: ${salario} 
Quantidade de Vagas: ${quantidade} 
Aberto para inscrição: ${abertoParaInscricao}`) 
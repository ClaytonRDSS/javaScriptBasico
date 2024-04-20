// Criança, adolescente, adulto ou Idoso

/*
(if/else = Estrutura condicional simples)
-----------------------------------------
(if () {

}
else if (){

}
else if () {

}
else {

}
) = Estrutura condicional composta
-----------------------------------------
*/

const prompt = require("prompt-sync")({sigint: true})


let idade = Number(prompt("Informe sua Idade: "))

if (idade > 0 && idade < 12) {
    console.log("Criança");
} else if (idade >= 12 && idade < 18) {
    console.log("Adolescente");
} else if (idade >= 18 && idade < 60) {
    console.log("Adulto");
} else{

    if (idade < 0 || idade > 120){
    console.log("Idade informada,  não condiz com espectativa de vida do brasileiro. ")
    } else {
        console.log("Idoso");
    }
}


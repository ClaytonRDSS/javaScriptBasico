// Debugger no VsCode

/*
Adicione um ponto de parad clicando com o mouse ao lado do número da linha que você deseja analisar.
Em seguida no menu da lateral esquerdo clique em Run and Debug (*|>).
Depois clique em JavaScript Debug Terminal, abrindo o terminal para debug do javaScript.
Execute no terminal o comando (node + nomeDoArquivo) e clique enter.
Use a tecla F10 para avançar e analisar as linhas do código uma a uma. 
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
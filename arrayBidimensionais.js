const prompt = require('prompt-sync')({ sigint: true })

// Criando ArrayUnidimensional/Vetor
let pessoas = []

/*
?      0          1         2
?0 ["João"] ["Masculino"] [ 47 ]
?1 ["Maria"] ["Feminino"] [ 35 ]
*/ 

// Transformando arrayUnidimensional em ArrayBidimensional/Matriz(lista de lista);
pessoas[0] = ["João", "Masculino", 47]
console.log("🚀 pessoas:", pessoas[0])

// Outra forma de inserir dados no Array
pessoas[1] = []
pessoas[1][0] = "Maria"
pessoas[1][1] = "Feminino"
pessoas[1][2] = 35
console.log("🚀 pessoas:", pessoas[1])


// Exibindo Dados
console.log("-----------------------")
for (let i = 0; i < pessoas.length; i++) {
    //! pessoas[i] é a posição da primeira coluna e o length traz a quantidade total de coluas para ser percorrida para exibir os dados!
    for (let j = 0; j < pessoas[i].length; j++) {
        console.log(`🚀 Pessoas: ${pessoas[i][j]}`)
    }
    console.log("-----------------------")
}

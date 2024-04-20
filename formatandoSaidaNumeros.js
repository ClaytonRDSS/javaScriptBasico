// Formatando saida de números usando o toFixed()

var valorDeCompra = 88.9651
var valorDeVenda = 114.45487
var quantidade = 7

console.log(`Valor de Compra: ${valorDeCompra} - Valor de Venda: ${valorDeVenda} - Quantidade: ${quantidade}`)

//se >= 5 arredondamento para cima, se < 5 arredondamento para baixo
console.log(`Valor de Compra: ${valorDeCompra.toFixed(2)} - Valor de Venda: ${valorDeVenda.toFixed(2)} - Quantidade: ${quantidade}`)
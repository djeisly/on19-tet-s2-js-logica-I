//Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let valorDoJantar = 115
const valorDaTaxa = valorDoJantar * 0.10
const valorTotal = valorDoJantar + valorDaTaxa
console.log(`O jantar custou um total de R$ ${(valorTotal).toFixed(2)}. E a taxa do garçom custou ${(valorDaTaxa).toFixed(2)}`)
let numero = prompt("Digite um número para saber se é primo: ")
let ehPrimo = true

for (let i = 2; i <= numero / 2; i++){
    if (numero % i == 0){
        ehPrimo = false
        break
    }
}

if (ehPrimo){
    console.log("ESTE É UM NÚMERO PRIMO!")
} else{
    console.log("ESTE NAO É UM NÚMERO PRIMO!")
}
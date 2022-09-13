let numeroUsuario = Number(prompt("Digite um número: "))
let qtd = [1,2,3,4,5,6,7,8,9,10]


for (let i in qtd){
    console.log(`${numeroUsuario} * ${qtd[i]} = ${numeroUsuario*qtd[i]}`)
}
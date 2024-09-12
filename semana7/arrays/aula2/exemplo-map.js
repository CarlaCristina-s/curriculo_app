//Método Map (usar no ex 5 do segundo projeto)

/**
 * Quando usar?
 Sempre que for necessário iterar (passar) por cada um dos itens sem modificar o array original

 // Usa quando tem que passar por todos os intens

 Primeiro parâmetro - item atual (que está trabalhando)
 2 parâmetro - index do item atual (posição/valor, começa por 0)
 3 parâmetro - array inteiro com todos os itens (todos os itens)
 */

//  const numeros = [5, 2, 10, 21, 13, 48]

// numeros.map((numeroAtual, index, arrayInteiro) => {
//   console.log(`${index} - ${numeroAtual} - ${arrayInteiro}`)
// })

// criando um array com o dobro

// const dobro = numeros.map(numeroAtual => numeroAtual*2)
// console.log(dobro)

// EXERCÍCIO: Dado o array de numeros: const numeros = [5, 2, 10, 21, 13, 48] Crie um novo array usando o método map com somente os número pares.

const numeros = [5, 2, 10, 21, 13, 48]

const numerosPares = []

numeros.map(numeroAtual => {
    if(numeroAtual % 2 == 0){
        numerosPares.push(numeroAtual)
    }
})

console.log(numerosPares)

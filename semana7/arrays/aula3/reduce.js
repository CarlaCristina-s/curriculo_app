// Reduce não cria array, é um acumulador. Usado para soma, para ver qual numero é maior dentro de um array... Ex.: poderia usar para fazer soma de todos os itens de uma categoria de um estoque
// Primeiro parâmetro é uma variável que o próprio reduce cria, o acumulador (vc que escolhe o nome). Quando o reduce inicia, o acumulador será undfined pq ainda não tem valor.
// Segundo será o item atual, no caso o numero.
// função de callback: ele recebe, executa a função e retorna o valor dela (uma função que chama outra pelo parâmetro)
// não altera o array original, igaul no map e no filter

const numeros = [5, 3, 7, 78, 33,54]

let soma = numeros.reduce((acumulador, numeroAtual) => {
  return acumulador + numeroAtual
  // ficando assim: 0+5=5; 5+3=8; 8+7=15; e assim por diante até o último número
  // pode colocar a partir de qual numero que vc quer começar (entre o },3) Ficando: 3+7=10; 10+78= 88;)
})


let maior = numeros.reduce((maior, num) => {
  return Math.max(maior, num)
})

console.log(soma)
console.log(maior)
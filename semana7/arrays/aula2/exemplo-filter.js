// const numeros = [5, 2, 10, 12, 20, 65]

/**
 * Quando usar?
 * 
 * Quando preciso filtrar os itens.
 * 
 * Se o resultado da condição for verdadeira
 * o item vai ser adicionado ao novo array, caso
 * contrário não.
 * 
 * passa por todos os itens. A diferença do map é para filtrar quais itens vc quer usar.
 */
// const impares = numeros.filter((numeroAtual) => {
//     return numeroAtual % 2 != 0
// })

// console.log(impares)

/**
 * Crie um novo array somente com os itens que contém
 * a letra "a"
 * 
 * Detalhe: use o método includes para verificar isso.
 * ex: pessoa.nome.includes("a")
 */
const pessoas = [
  {nomeCompleto: "Ana", idade: 24},
  {nome: "Bento", idade: 17},
  {nome: "Leonardo", idade: 22},
  {nome: "Maria", idade: 19},
  {nome: "Bruno", idade: 65},
]

const pessoasFiltradas = 
pessoas.filter(pessoaAtual => pessoaAtual.nome.includes("a"))
// pessoas.filter(pessoaAtual => pessoaAtual['nome'].includes("a"))

// const pessoasFiltradas = pessoas.filter(pessoa => {
//     return pessoa.idade >= 18 && pessoa.idade <= 22
// })

console.log(pessoasFiltradas)
// obejeto lida com chave: valor
// objeto simples: não depende de uma classe

const aluno = {
  nome: "Carla",
  matricula: "1234567",
  dataNascimento: "09/10/1087",
  curso: "Clamed"
}

// Destructing/desestruturação. Só acontece para um único objeto
const {matricula} = aluno

console.log(matricula)




// ATIVIDADE A

// const informaçõesAluno = {
//   nome: "",
//   curso: "",
//   email: ""
// }

// informaçõesAluno.email = prompt("digite seu email")
// informaçõesAluno.curso = prompt("digite seu curso")
// informaçõesAluno.nome = prompt("digite seu nome")

// console.log(informaçõesAluno)
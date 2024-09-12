// Evitar usar var (por causa de bugs); usar let ou const (não pode alterar). Ex.:

// const numero1 = 10;
// const numero2 = 15;
// let resultado = 5 * 2;
// let resultado2 = numero1 + numero2;

// console.log(resultado);
// console.log(resultado2);

// construir fluxos na aplicação (se/IF;senão/ELSE). Ex.:

// const idade = 18;
// const temCadastro = true;

// if (idade >= 18 && temCadastro) {
//   console.log("Continua o preocesso.");
// } else {
//   console.log("Pedir cadastro ou informar idade.");
// }

// não é recomendado ficar usando else if. Usar switch no lugar (tem outras boas práticas além do switch também).
// const idade = 16;
// if (idade >= 18 && idade < 65) {
//   console.log("É adulto.");
// } else if (idade >= 65) {
//   console.log("É idoso.");
// } else {
//   console.log("É menor de idade.");
// }

// SWITCH
// const dia = 3;

// switch (dia) {
//   case 1:
//     console.log("domingo");
//     break;
//   case 2:
//     console.log("segunda");
//     break;
//   case 3:
//     console.log("terça");
//     break;
//   case 4:
//     console.log("quarta");
//     break;
//   case 5:
//     console.log("quinta");
//     break;
//   case 6:
//     console.log("sexta");
//     break;
//   case 7:
//     console.log("sábado");
//     break;

//   default:
//     break;
// }


// Exercício

// const nome = prompt("Digite seu nome:")
// const idade = parseInt(prompt("Digite sua idade:"))

// let mensagem = ""

// if (idade < 18){
//   mensagem = "Você é uma criança ou adolescente"
// } else if (idade >= 18){
//   mensagem = "Você é um adulto"
// } else {
//   mensagem = "Você é um idoso"
// }

// console.log(mensagem)

// FUNÇÕES

// function soma(numero1, numero2) {
//   const res = numero1 + numero2
//   return numero1 + numero2
// }

// const resultado = soma(10, 12)

// console.log(resultado)

// outro ex de funções

// const largura = parseInt(prompt("Passe a largura do teu terreno:"))
// const comprimento = parseInt(prompt("Passe o comprimento do teu terreno:"))

// function calcularArea(largura, comprimento) {
//   const resposta = largura * comprimento
//   return resposta
// }

// const resposta = calcularArea(largura, comprimento)
// alert(resposta)


// OBJETOS

// const usuario = {
//   username: "joaosoares",
//   foto: "url",
//   nome: "João"
// }

// extrair duas variáveis ou mais

// const { username, nome } = usuario
// console.log(username)
// console.log(nome)

// podemos usar funções dentro dos objetos
// o atributo this é para buscar o valor das propriedades definidades dentro do objeto (no caso abaixo o objeto é o nome)

const usuario = {
  nome: "João",
  saudacao: function () {
    return `Olá, meu nome é ${this.nome}` 
  },
}
console.log(usuario.comer())
console.log(usuario.saudacao())


// ARRAY - listas. Inicia com colchetes [].




// Exercícios
function isEven(num) {
  return num % 2 === 0
}

const number = parseInt(prompt("Digite um número"))
const result = isEven(number)

if (result) {
  console.log('O número é par')
} else {
  console.log('O número é ímpar')
}

// exercício
function gradeClassification(nota) {
  if (nota >= 90 && nota <= 100) return 'A'
  if (nota >= 80 && nota <= 89) return 'B'
  if (nota >= 70 && nota <= 79) return 'C'
  if (nota >= 60 && nota <= 69) return 'D'
  if (nota >= 0 && nota <= 59) return 'F'

  return 'Nota inválida'
}
console.log(gradeClassification(90))

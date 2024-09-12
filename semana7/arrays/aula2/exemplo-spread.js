// Spread/Rest operator (...). Vantagem: consegue ter algo novo, novo dado a partir dos dados originais, sem afetá-los
// const frutas1 = ["maçã", "abacaxi", "banana"]
// const frutas2 = ["laranja", "acerola", "manga"]

// const novoArray = [...frutas1, ...frutas2]

// console.log(novoArray)



const usuario = {
  nome: "Bruno",
  email: "bruno@email.com"
}

const usuario2 = {...usuario}

usuario2.nome = "Davi"

console.log(usuario)
console.log(usuario2)
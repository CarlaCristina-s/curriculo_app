import dadosReceitas from "./receitas.json" with {type: "json"}

function exibirReceitas(){
  // exercício: renderizar a primeira receita no corpo da div
  const receita = dadosReceitas.receitas[0] // indice 0 pega a primeira receita, o indice 1 a segunda...

  const div = document.getElementById("receita")

  const titulo = document.createElement("h1")
  titulo.innerText = receita.nome
  div.appendChild(titulo)

  const listaIngredientes = document.createElement("ul")
  
  receita.ingredientes.map((ingrediente) => {
      const li = document.createElement("li")
      li.innerText = ingrediente
      listaIngredientes.appendChild(li)
  })

  div.appendChild(listaIngredientes)

  const listaInstrucoes = document.createElement("ul")

  receita.instrucoes.map((instrucao) => {
      const li = document.createElement("li")
      li.innerText = instrucao
      listaInstrucoes.appendChild(li)
  })

  div.appendChild(listaInstrucoes)

  const imagem = document.createElement("img")
  imagem.src = receita.imagem
  imagem.width = '240'

  div.appendChild(imagem)
}

exibirReceitas()
const listaAlunos = [
  {
      nome: 'Bruno',
      turma: 'clamed v3'
  },
  {
      nome: 'Cleiton',
      turma: 'clamed v3'
  },
  {
      nome: 'Natalia',
      turma: 'clamed v3'
  },
  {
      nome: 'Demetrio',
      turma: 'clamed v3'
  },
  {
      nome: 'Davi',
      turma: 'clamed v3'
  }
]

function mostrarAlunos(){
  const listaUl = document.getElementById('listaAlunos')

  listaAlunos.map((alunoAtual, index) => {
      const li = document.createElement("li")
      li.innerText = `${index} - ${alunoAtual.nome} - ${alunoAtual.turma}`

      listaUl.appendChild(li)
  })
}

mostrarAlunos()
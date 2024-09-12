import jsonAlunos from './alunos.json' with {type: 'json'}

// console.log(jsonAlunos)

const alunoJson = `{
  "nome":"João",
  "email":"joao@email.com",
  "tuma":"Clamed"
}`

console.log(JSON.parse(alunoJson))

const alunoObject = {
  "nome":"Joaquim",
  "email":"joa@email.com",
  "tuma":"Clamed"
}

console.log(JSON.stringify(alunoObject))
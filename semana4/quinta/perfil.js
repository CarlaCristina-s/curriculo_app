function carregarDados() {
  const dados =  JSON.parse(localStorage.getItem("perfil"))

  document.getElementById("foto").src = dados.
  document.getElementById("nome").innerText = dados.nome
  document.getElementById("idade").innerText = dados.idade
  document.getElementById("descricao").innerText = dados.descricao


}


window.onload = carregarDados

// JSON.parse transformar string em objeto. (parse significa transformar)
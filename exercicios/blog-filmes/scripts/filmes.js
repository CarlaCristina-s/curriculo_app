function carregarFilme() {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const idUrl = params.get("id");

  const filmesSalvos = JSON.parse(localStorage.getItem("filmes"));
  const filme = filmesSalvos.find((item) => item.id == idUrl);

  console.log(filmesSalvos);

  if (filme == undefined) {
    alert("Erro 404");
  } else {
   
    alert("Encontrado");
  }
}

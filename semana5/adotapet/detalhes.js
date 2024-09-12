function carregarDadosPe() {
  const petsNoLOcalStorage = JSON.parse(localStorage.getItem("pets"))


  //captura da url
  const url = new URL(window.location.href) 
  const params = new URLSearchParams(url.search)
  const idUrl = params.get("id")

  const petEncontrado = petsNoLOcalStorage.find((item) => item.id == idUrl)
  document.getElementById('nome').innerText

  console.log(petEncontrado)
}

document.addEventListener('DOM')
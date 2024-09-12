//event: (evento de submissão) parâmetro que representa o próprio evento; preventDefault: para nao ficar recarregando a tela a todo momento

function cadastrarPet(event) {
  event.preventDefault(); // evita a tela recarregar

  const foto = document.getElementById("foto").value;
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const cor = document.getElementById("cor").value;
  const categoria = document.getElementById("categoria").value;
  const descricao = document.getElementById("descricao").value;
  const proprietario = document.getElementById("proprietario").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;

  // validando formulário

  if (foto === "") {
    document.getElementById("foto").style.borderColor = "red";
    document.getElementById("foto").style.borderWidth = "2px";
    document.getElementById("error-foto").innerText = "Você precisa cadastrar uma foto";
  } else {
    document.getElementById("foto").style.borderColor = "";
    document.getElementById("foto").style.borderWidth = "";
    document.getElementById("error-foto").innerText = "";
  }

  if (nome === "") {
    document.getElementById("nome").style.borderColor = "red";
    document.getElementById("nome").style.borderWidth = "2px";
    document.getElementById("error-nome").innerText = "Nome é obrigatório";
  } else {
    document.getElementById("nome").style.borderColor = "";
    document.getElementById("nome").style.borderWidth = "";
    document.getElementById("error-nome").innerText = "";
  }

  // if (idade === "") {
  //   document.getElementById("idade").style.borderColor = "red";
  //   document.getElementById("idade").style.borderWidth = "2px";
  //   document.getElementById("error-idade").innerText = "Idade é obrigatório";
  // } else {
  //   document.getElementById("idade").style.borderColor = "";
  //   document.getElementById("idade").style.borderWidth = "";
  //   document.getElementById("error-idade").innerText = "";
  // }

  // if (cor === "") {
  //   document.getElementById("cor").style.borderColor = "red";
  //   document.getElementById("cor").style.borderWidth = "2px";

  //   document.getElementById("error-cor").innerText = "Cor é obrigatório";
  // } else {
  //   document.getElementById("cor").style.borderColor = "";
  //   document.getElementById("cor").style.borderWidth = "";
  //   document.getElementById("error-cor").innerText = "";
  // }

  if (categoria === "") {
    document.getElementById("categoria").style.borderColor = "red";
    document.getElementById("categoria").style.borderWidth = "2px";

    document.getElementById("error-categoria").innerText =
      "Selecione uma categoria";
  } else {
    document.getElementById("categoria").style.borderColor = "";
    document.getElementById("categoria").style.borderWidth = "";
    document.getElementById("error-categoria").innerText = "";
  }

  if (descricao === "") {
    document.getElementById("descricao").style.borderColor = "red";
    document.getElementById("descricao").style.borderWidth = "2px";

    document.getElementById("error-descricao").innerText =
      "Descrição do pet é obrigatório";
  } else {
    document.getElementById("descricao").style.borderColor = "";
    document.getElementById("descricao").style.borderWidth = "";
    document.getElementById("error-descricao").innerText = "";
  }

  if (proprietario === "") {
    document.getElementById("proprietario").style.borderColor = "red";
    document.getElementById("proprietario").style.borderWidth = "2px";

    document.getElementById("error-proprietario").innerText =
      "Proprietário é obrigatório";
  } else {
    document.getElementById("proprietario").style.borderColor = "";
    document.getElementById("proprietario").style.borderWidth = "";
    document.getElementById("error-proprietario").innerText = "";
  }

  // if (email === "") {
  //   document.getElementById("email").style.borderColor = "red";
  //   document.getElementById("email").style.borderWidth = "2px";

  //   document.getElementById("error-email").innerText = "E-mail é obrigatório";
  // } else {
  //   document.getElementById("email").style.borderColor = "";
  //   document.getElementById("email").style.borderWidth = "";
  //   document.getElementById("error-email").innerText = "";
  // }

  if (telefone === "") {
    document.getElementById("telefone").style.borderColor = "red";
    document.getElementById("telefone").style.borderWidth = "2px";

    document.getElementById("error-telefone").innerText =
      "Telefone é obrigatório";
  } else {
    document.getElementById("telefone").style.borderColor = "";
    document.getElementById("telefone").style.borderWidth = "";
    document.getElementById("error-telefone").innerText = "";
  }

  if (foto && nome && categoria && descricao && proprietario && telefone) {
    const pet = {
      // id: Math.random() Opcão 1 para gerar um número aleatório,
            // id: crypto.randomUUID() Opção 2 para gerar um número aleatório,
            id: Date.now(),
      foto: foto,
      nome: nome,
      idade: idade,
      cor: cor,
      categoria: categoria,
      descricao: descricao,
      proprietario: proprietario,
      email: email,
      telefone: telefone,
       // criado: new Date().toLocaleDateString()
    };

    let listaNoLocalStorage = JSON.parse(localStorage.getItem("pets")); // vai no local storage e pega a lista

    if (listaNoLocalStorage === null) listaNoLocalStorage = [];

    listaNoLocalStorage.push(pet);

    localStorage.setItem("pets", JSON.stringify(listaNoLocalStorage)); // salvar no local storage

    document.getElementById("form-pet").reset() // para limpar o local storage
  }
}

document // seu documento html
  .getElementById("form-pet") // ir no doc e localizar o elemento com id form-pet
  .addEventListener("submit", cadastrarPet); // adicionar um evento de submissão vinculado a função cadastrarPet

// ver mais sobre addEventListner


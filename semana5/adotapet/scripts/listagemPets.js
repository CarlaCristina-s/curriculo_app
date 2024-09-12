function carregarDados() {
  const petsNaMemoria = JSON.parse(localStorage.getItem("pets"));

  const lista = document.getElementById("lista-pets");

  petsNaMemoria.forEach((pet) => {
    console.log(pet.nome);
    // geração da div
    const div = document.createElement("div");
    div.classList.add("item-pet");

    const img = document.createElement("img");
    img.setAttribute("width", "150px");
    img.setAttribute("height", "150px");
    img.style.objectFit = "cover";
    img.setAttribute("src", pet.foto);
    div.append(img);

    const h2 = document.createElement("h2");
    h2.innerText = pet.nome;
    div.append(h2); // append sempre joga para o final após o último filho

    const buttonDeletar = document.createElement("button");
    button.innerText = "Deletar";
    buttonDeletar.onclick = () => buttonDeletar(pet.id);

    // VER PARA ATV EM GRUPO

    const buttonAdotar = document.createElement("button");
    button.innerText = "Adotar";
    buttonAdotar.onclick = () => window.location.href = "detalhes-pet.html?id=" + pet.id; // quando clicar no botao vai encaminhar para a html ou pasta que vc quer acessar, muda a página (adiciona no final: ?id= + a informação que quero, no caso o id do pet) (por modal tb dá certo, não precisaria do js, mas o modal precisa estar na mesma tela, no exercicios as telas estão separadas)

    const divBotoes = document.createElement('div')
    divBotoes.classList("pet-card-botoes")

    div.append(buttonDeletar);
    div.append(buttonAdotar);
    div.append(botoes);

    lista.append(div);
    // fim da geração da div

    // const botao = document.createElement("botao");
    // botao.innerText = "Deletar";
    // botao.onclick = () => deletar(pet.id)

    // div.append(botao);
  });
}

document.addEventListener("DOMContentLoaded", carregarDados); // evento para disparar quando o conteúdo for carregado (função)

// js consegue criar tags no html (sem a tag estar lá)
// append joga para o final, após o último filho
// Exemplo:

// (((  const meuH1 = document.createElement('h1')
//  meuH1.innerText = "Testando os poderes do js"
//  lista.append(meuH1)   )))

// setAttribut = setar atributo, ex. um width

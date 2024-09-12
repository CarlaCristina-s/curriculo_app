function calcularMediaNotas(notaUm, notaDois, notaTres, notaQuatro) {
  var mediaNotas = (notaUm + notaDois + notaTres + notaQuatro) / 4;
  return mediaNotas;
}

document
  .getElementById("calculadora")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;
    var nota4 = document.getElementById("nota4").value;

    console.log(calcularMediaNotas(nota1, nota2, nota3, nota4));
  });

document // document é o arquivo que recebe o script
  .getElementById("calculadora") // pegar o elemento com id calculadora
  .addEventListener("submit", executarFormulario);

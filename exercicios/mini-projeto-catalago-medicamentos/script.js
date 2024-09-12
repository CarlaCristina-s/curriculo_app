function cadastrarUsuario(event) {
  event.preventDefault();

  const nomeUsuario = document.getElementById("nome-cadastro").value;
  const senhaUsuario = document.getElementById("senha").value;
  const emailUsuario = document.getElementById("email").value;

  const usuario = {
    nome: nomeUsuario,
    senha: senhaUsuario,
    email: emailUsuario,
  };

  let usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios"));
  if (usuariosCadastrados === null) usuariosCadastrados = [];

  usuariosCadastrados.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuariosCadastrados));
}

document
  .getElementById("register-form")
  .addEventListener("submit", cadastrarUsuario);



function login(event) {
  event.preventDefault();

  const usuarios = JSON.parse(localStorage.getItem("usuarios"));

  const nomeUsuario = document.getElementById("username").value;
  const senhaUsuario = document.getElementById("password").value;

  const validarLogin = usuarios.find((usuario) => nomeUsuario == usuario.nome && senhaUsuario == usuario.senha);

  if (validarLogin == undefined) {
    alert("Usuário ou senha estão incorretos")
  } else {
    window.location.href = "home.html"
  }


}

document.getElementById("login-form").addEventListener("submit", login);

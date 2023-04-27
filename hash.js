import { createHash } from "crypto";

function criaHash(senha) {
  return createHash("sha256").update(senha).digest("hex");
}

console.log(criaHash("Senha"));

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.hash = criaHash(senha);
  }

  autentica(nome, senha) {
    if (nome === this.nome && this.hash === criaHash(senha)) {
      console.log("Usuario autenticado");
      return true;
    }
    console.log("Usuario ou senha incorreto");
    return false;
  }
}

const usuario = new Usuario("Joao Manoel", "MinhaSenha");

console.log(usuario);

//true
usuario.autentica("Joao Manoel", "MinhaSenha");

//false
usuario.autentica("Joao Manoel", "minhasenha");

usuario.autentica("Joao", "MinhaSenha");

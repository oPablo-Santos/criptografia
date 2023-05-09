import { createHash } from "crypto";

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.hash = this.criaHash(senha);
  }

  criaHash(senha) {
    return createHash("sha256").update(senha).digest("hex");
  }

  autentica(nome, senha) {
    if (nome === this.nome && this.hash === this.criaHash(senha)) {
      console.log("Usuario autenticado");
      return true;
    }
    //console.log("Usuario ou senha incorreto");
    return false;
  }
}

const usuario = new Usuario("Joao Manoel", "senha123");

const senhasComuns = [
  "senha",
  "123456",
  "senha123",
  "admin",
  "blink182",
  "meuAniversario",
  "senha123456",
  "brasil",
  "102030",
];

senhasComuns.map(senha => {
  if (usuario.autentica("Joao Manoel", senha)) {
    console.log(`A senha do usuario é ${senha}`);
  }
});

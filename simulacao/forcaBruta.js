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

const usuario = new Usuario("Joao Manoel", "1337");

console.log(usuario);


for (let senhaTeste = 0; senhaTeste < 10000; senhaTeste++){
    if(usuario.autentica("Joao Manoel", senhaTeste.toString()))
    {
        console.log(`A senha do usuario é ${senhaTeste}`)
    }
}
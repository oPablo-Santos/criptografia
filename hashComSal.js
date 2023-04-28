import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

function criaHashComSal(senha) {
  const sal = randomBytes(16).toString("hex");

  const senhaHasheada = scryptSync(senha, sal, 64).toString("hex");

  return `${sal}:${senhaHasheada}`;
}

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    [this.sal, this.hash] = criaHashComSal(senha).split(":");
  }
  autentica(nome, senha) {
    if (nome === this.nome) {
      const testeHash = scryptSync(senha, this.sal, 64);
      const hashReal = Buffer.from(this.hash, "hex");

      const hashCorrespondem = timingSafeEqual(testeHash, hashReal);

      if (hashCorrespondem) {
        console.log("Usuario autenticado");
        return true;
      }
    }
    console.log("Usuario ou senha incorretos");
  }
}

const jm = new Usuario("Joao Gomes", "MinhaSenha");

//true
jm.autentica('Joao Gomes', 'MinhaSenha')

//false
jm.autentica('Joao Gomes', 'minhasenha')

jm.autentica('Joao Gomez', 'MinhaSenha')
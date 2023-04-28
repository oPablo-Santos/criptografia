import { generateKeyPairSync } from "crypto";

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,

  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

import { publicEncrypt, privateDecrypt } from "crypto";

const dadosCriptografados = publicEncrypt(
  publicKey,
  Buffer.from("MensagemSecreta")
);

console.log(dadosCriptografados.toString("hex"));

// transmissao

const dadosDecifrados = privateDecrypt(privateKey, dadosCriptografados);

console.log(dadosDecifrados.toString("utf-8"));

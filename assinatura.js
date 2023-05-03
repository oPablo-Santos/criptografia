import { generateKeyPairSync, createSign, createVerify } from "crypto";

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

let dados = "Essa string vai ser assinada";

// assinatura
const assinador = createSign("rsa-sha265");

assinador.update(dados);

const assinatura = assinador.sign(privateKey, "hex");

console.log(`assinatura: ${assinatura}`);



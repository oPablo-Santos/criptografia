import jwt from 'jsonwebtoken'

const chaveSecreta = "chaveSuperSecreta"

const token = jwt.sign({
    apelido: "jm",
    curso:"node"
}, chaveSecreta
)

console.log(token)

const tokenDecodificado = jwt.verify(token, chaveSecreta)

console.log(tokenDecodificado)
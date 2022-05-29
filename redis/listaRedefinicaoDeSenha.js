const redis = require('redis')
const manipulaLista = require('./manipula-lista')

const conexao = redis.createClient({ prefix: 'redefinir-senha' })

module.exports = manipulaLista(conexao)
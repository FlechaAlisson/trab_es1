const Cliente = require("../cliente/Cliente");
const Transacao = require("./Transacao");
const TipoConta = require("./TipoConta");
const Banco = require("./Banco");


class ContaBancaria {
  numeroConta;
  saldo;
  cliente = new Cliente();
  tipoConta = new TipoConta();
  transacao = new Transacao();
  banco = new Banco();
}

module.exports = ContaBancaria;
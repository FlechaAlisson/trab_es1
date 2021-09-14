const AtividadeComercial = require("./AtividadeComercial");
const Pessoa = require("./Pessoa");

class PessoaJuridica extends Pessoa {
  constructor(cnpj, atividadeComercial, primeiroNome, sobrenome, nomeSocial, endereco, telefone, email) {
    super(primeiroNome, sobrenome, nomeSocial, endereco, telefone, email);
    this.cnpj = cnpj;
    this.atividadeComercial = new AtividadeComercial(atividadeComercial);
  }
}

module.exports = PessoaJuridica;
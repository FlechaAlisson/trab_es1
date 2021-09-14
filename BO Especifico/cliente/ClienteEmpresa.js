const PessoaJuridica = require("../../BO/person/PessoaJuridica");

class ClienteEmpresa extends PessoaJuridica {
  constructor(usuario, endereco, contato) {
    super(
      usuario.documento.cnpj,
      usuairo.primeiroNome,
      usuairo.sobrenome,
      usuario.genero,
      endereco,
      contato.telefone,
      contato.email
    );
  }
}

module.exports = ClienteEmpresa;

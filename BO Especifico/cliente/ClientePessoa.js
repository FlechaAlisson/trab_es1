const PessoaFisica = require("../../BO/person/PessoaFisica");

class ClientePessoa extends PessoaFisica {
  constructor(usuario, endereco, contato) {
    super(
      usuario.documento.cpf,
      usuairo.primeiroNome,
      usuairo.sobrenome,
      usuario.genero,
      endereco,
      contato.telefone,
      contato.email
    );
  }
}

module.exports = ClientePessoa;

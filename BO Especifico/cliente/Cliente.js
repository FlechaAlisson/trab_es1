const ClienteEmpresa = require("./ClienteEmpresa");
const ClientePessoa = require("./ClientePessoa");

class Cliente {
  constructor(usuario, endereco, contato) {
    if (usuario.documento.tipo == "cpf") {
        clientePessoa = new ClientePessoa(
          usuario.documento.cpf,
          usuairo.primeiroNome,
          usuairo.sobrenome,
          usuario.genero,
          endereco,
          contato.telefone,
          contato.email
        );
    }
    else if (usuario.documento.tipo == "cnpj"){
        clienteEmpresa = new ClienteEmpresa(
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
}
module.exports = Cliente;

const Endereco = require('./Endereco')

class EnderecoEspecifico{
    constructor(id, nroCasa, complemento, endereco){
        this.id = id;
        this.nroCasa = nroCasa;
        this.complemento = complemento;
        this.endereco = new Endereco(
          endereco.cep,
          endereco.logradouro,
          endereco.bairro,
          endereco.cidade
        );
    }
}

module.exports = EnderecoEspecifico
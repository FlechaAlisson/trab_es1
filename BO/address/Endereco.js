const Logradouro = require("./Logradouro");
const  Bairro = require("./Bairro");
const Cidade = require("./Cidade");

class Endereco{
    constructor(cep, logradouro, bairro, cidade) {
        this.cep = cep;
        this.logradouro = new Logradouro(logradouro);
        this.bairro = new Bairro(bairro);
        this.cidade = new Cidade(cidade);
    }
}

module.exports = Endereco;
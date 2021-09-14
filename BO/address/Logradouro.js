const TipoLogradouro = require("./TipoLogradouro");

class Logradouro{
    constructor(nome, tipoLogradouro){ 
        this.nome = nome;
        this.tipoLogradouro = new TipoLogradouro(tipoLogradouro);
    }
}

module.exports = Logradouro
const EnderecoEspecifico = require("../address/EnderecoEspecifico");
const Telefone = require('./Telefone')

class Pessoa {
	constructor(primeiroNome, sobrenome, nomeSocial, endereco, telefone, email) {
		this.nome = primeiroNome + " " + sobrenome;
		this.nomeSocial = nomeSocial;
		this.enderecoEspecifico = new EnderecoEspecifico(endereco.id, 
														endereco.nroCasa, 
														endereco.complemento, 
														endereco);
		this.telefone = new Telefone(telefone);
		this.email = email;
	}
}

module.exports = Pessoa;
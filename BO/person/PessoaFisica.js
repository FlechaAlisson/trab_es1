const Pessoa = require('./Pessoa');
const Genero = require("./Genero");

class PessoaFisica extends Pessoa {
	constructor(cpf, primeiroNome, sobrenome, genero, endereco, telefone, email) {
		super(primeiroNome, sobrenome, nomeSocial, endereco, telefone, email);
		this.cpf = cpf;
		if(this.validadeCPF()){
			this.primeiroNome = primeiroNome;
			this.sobrenome = sobrenome;
			this.genero = new Genero(genero);
		}
	}

	validadeCPF(){
		var Soma;
		var Resto;
		Soma = 0;
		var i;
		if (this.cpf == "00000000000") return false;

		for (i = 1; i <= 9; i++)
			Soma = Soma + parseInt(this.cpf.substring(i - 1, i)) * (11 - i);
		Resto = (Soma * 10) % 11;

		if (Resto == 10 || Resto == 11) Resto = 0;
		if (Resto != parseInt(this.cpf.substring(9, 10)))
			return false;

		Soma = 0;
		for (i = 1; i <= 10; i++)
			Soma = Soma + parseInt(this.cpf.substring(i - 1, i)) * (12 - i);
		Resto = (Soma * 10) % 11;

		if (Resto == 10 || Resto == 11) Resto = 0;
		if (Resto != parseInt(this.cpf.substring(10, 11)))
			return false;
		return true;
	}
}

module.exports = PessoaFisica;
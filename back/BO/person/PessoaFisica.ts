import Pessoa from './Pessoa';
import Genero from "./Genero";

class PessoaFisica extends Pessoa {
	private _cpf: String;
	private _primeiroNome: String;
	private _sobrenome: String;
	private _genero: Genero;

	get cpf() {
	return this._cpf
	}

	set cpf(val: String) {
	this._cpf = val
	}

	get primeiroNome() {
	return this._primeiroNome
	}

	set primeiroNome(val: String) {
	this._primeiroNome = val
	}

	get sobreNome() {
	return this._sobrenome
	}

	set sobreNome(val: String) {
	this._sobrenome = val
	}

}
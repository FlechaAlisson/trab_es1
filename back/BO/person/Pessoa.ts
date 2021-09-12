import EnderecoEspecifico from "../address/EnderecoEspecifico";

export default class Pessoa{
	private _nome: String;
	private _nomeSocial: String;  
	private _enderecoEspecifico: EnderecoEspecifico;
	private _email: Array<string>;
	private _telefone: Array<Telefone>;

	get nome() {
	return this._nome
	}

	set nome(val: String) {
	this._nome = val
	}

	get nomeSocial() {
	return this._nomeSocial
	}

	set nomeSocial(val: String) {
	this._nomeSocial = val
	}  
}
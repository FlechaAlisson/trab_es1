export default class Genero{
	private _nome: String;
	private _siglaGenero: String;

	get nome() {
	return this._nome
	}

	set nome(val: String) {
	this._nome = val
	}

	get siglaGenero() {
	return this._siglaGenero
	}

	set siglaGenero(val: String) {
	this._siglaGenero = val
	}
}
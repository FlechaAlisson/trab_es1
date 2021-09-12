class Telefone{
	private _id: number;
	private _numero: String;
	private _DDI: String;
	private _DDD: String;

	get id() {
	return this._id
	}

	set id(val: number) {
	this._id = val
	}

	get numero() {
	return this._numero
	}

	set numero(val: String) {
	this._numero = val
	}

	get DDI() {
	return this._DDI
	}

	set DDI(val: String) {
	this._DDI = val
	}

	get DDD() {
	return this._DDD
	}

	set DDD(val: String) {
	this._DDD = val
	}

}
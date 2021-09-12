import AtividadeComercial from "./AtividadeComercial";
import Pessoa from "./Pessoa";

class PessoaJuridica extends Pessoa{
	private _pessoa: Pessoa;
	private _cnpj: String;
	private _atividadeComercial: AtividadeComercial;

	get pessoa() {
	  return this._pessoa
	}
	
	set pessoa(val: Pessoa) {
	  this._pessoa = val
	}
	
	get cnpj() {
	  return this._cnpj
	}
	
	set cnpj(val: String) {
	  this._cnpj = val
	}
}
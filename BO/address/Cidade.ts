import UnidadeFederal from "./UnidadeFederal";

export default class Cidade{
    private _idCidade: number;
    private _nomeCidade: String;
    private _UF: UnidadeFederal;

    get idCidade() {
      return this._idCidade
    }
    
    set idCidade(val: number) {
      this._idCidade = val
    }
    
    get nomeCidade() {
      return this._nomeCidade
    }
    
    set nomeCidade(val: String) {
      this._nomeCidade = val
    }
}
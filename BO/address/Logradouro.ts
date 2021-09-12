import TipoLogradouro from "./TipoLogradouro";

export default class Logradouro{
    private _id: number;
    private _nome: String;
    private _tipoLogradouro: TipoLogradouro;

    get id() {
      return this._id
    }
    
    set id(val: number) {
      this._id = val
    }
    
    get nome() {
      return this._nome
    }
    
    set nome(val: String) {
      this._nome = val
    }
}
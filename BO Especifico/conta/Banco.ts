import Agencia from "./Agencia";

export default class Banco{
    private _numeroBanco: number;
    private _siglaBanco: String;
    private _nomeBanco: String;
    private _agencia: Agencia;

    get numeroBanco() {
      return this._numeroBanco
    }
    
    set numeroBanco(val: number) {
      this._numeroBanco = val
    }
    
    get siglaBanco() {
      return this._siglaBanco
    }
    
    set siglaBanco(val: String) {
      this._siglaBanco = val
    }
    
    get nomeBanco() {
      return this._nomeBanco
    }
    
    set nomeBanco(val: String) {
      this._nomeBanco = val
    }
    
}
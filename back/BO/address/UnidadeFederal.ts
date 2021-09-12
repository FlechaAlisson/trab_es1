export default class UnidadeFederal{
    private _id: string;
    private _siglaUF: String;
    private _nomeUF: String;

    get id() {
      return this._id
    }
    
    set id(val: string) {
      this._id = val
    }
    
    get siglaUF() {
      return this._siglaUF
    }
    
    set siglaUF(val: String) {
      this._siglaUF = val
    }
    
    get nomeUF() {
      return this._nomeUF
    }
    
    set nomeUF(val: String) {
      this._nomeUF = val
    }
}
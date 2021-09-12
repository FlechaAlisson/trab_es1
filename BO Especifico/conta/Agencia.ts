export default class Agencia{
    private _numeroAgencia: number;
    private _nomeAgencia: number;

    get numeroAgencia() {
      return this._numeroAgencia
    }
    
    set numeroAgencia(val: number) {
      this._numeroAgencia = val
    }
    
    get nomeAgencia() {
      return this._nomeAgencia
    }
    
    set nomeAgencia(val: number) {
      this._nomeAgencia = val
    }
}
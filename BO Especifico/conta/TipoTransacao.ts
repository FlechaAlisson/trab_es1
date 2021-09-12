export default class TipoTransacao{
    private _numeroTipo: string;
    private _nomeTipo: string;

    get numeroTipo() {
      return this._numeroTipo
    }
    
    set numeroTipo(val: string) {
      this._numeroTipo = val
    }
    
    get nomeTipo() {
      return this._nomeTipo
    }
    
    set nomeTipo(val: string) {
      this._nomeTipo = val
    }
}
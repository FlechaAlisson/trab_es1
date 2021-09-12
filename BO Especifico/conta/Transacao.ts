import TipoTransacao from "./TipoTransacao";

export default class Transacao{
    private _data: Date;
    private _valor: number;
    private _tipoeTransacao: TipoTransacao;

    get data() {
      return this._data
    }
    
    set data(val: Date) {
      this._data = val
    }
    
    get valor() {
      return this._valor
    }
    
    set valor(val: number) {
      this._valor = val
    }
    
}
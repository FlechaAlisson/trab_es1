export default class TipoConta{
    private _siglaConta: string;
    private _descricao: string;

    get siglaConta() {
      return this._siglaConta
    }
    
    set siglaConta(val: string) {
      this._siglaConta = val
    }
    
    get descricao() {
      return this._descricao
    }
    
    set descricao(val: string) {
      this._descricao = val
    }
}
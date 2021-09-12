export default class Bairro{
    private _idBairro: number;
    private _nomeBairro: String;

    get idBairro() {
      return this._idBairro
    }
    
    set idBairro(val: number) {
      this._idBairro = val
    }
    
    get nomeBairro() {
      return this._nomeBairro
    }
    
    set nomeBairro(val: String) {
      this._nomeBairro = val
    }
}
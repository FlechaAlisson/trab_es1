import Endereco from "./Endereco";

export default class EnderecoEspecifico{
    private _id: number;
    private _nrocasa: number;
    private _complemento: String;
    private _endereco: Endereco;

    get id() {
      return this._id
    }
    
    set id(val: number) {
      this._id = val
    }
    
    get nrocasa() {
      return this._nrocasa
    }
    
    set nrocasa(val: number) {
      this._nrocasa = val
    }
    
    get complemento() {
      return this._complemento
    }
    
    set complemento(val: String) {
      this._complemento = val
    }
    
}
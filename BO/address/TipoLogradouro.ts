export default class TipoLogradouro{
    private _id: number;
    private _siglaTipoLogradouro: String;

    get id() {
      return this._id
    }
    
    set id(val: number) {
      this._id = val
    }
    
    get siglaTipoLogradouro() {
      return this._siglaTipoLogradouro
    }
    
    set siglaTipoLogradouro(val: String) {
      this._siglaTipoLogradouro = val
    }
}
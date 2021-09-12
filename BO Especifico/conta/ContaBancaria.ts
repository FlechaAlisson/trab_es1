import Cliente from "../cliente/Cliente"
import Transacao from "./Transacao";
import TipoConta from "./TipoConta";
import Banco from "./Banco";

export default class ContaBancaria{
    private _numeroConta: number;
    private _saldo: number;
    private _cliente: Cliente;
    private _tipoConta: TipoConta;
    private _transacao: Transacao;
    private _banco: Banco;

    get numeroConta() {
      return this._numeroConta
    }
    
    set numeroConta(val: number) {
      this._numeroConta = val
    }
    
    get saldo() {
      return this._saldo
    }
    
    set saldo(val: number) {
      this._saldo = val
    }

}
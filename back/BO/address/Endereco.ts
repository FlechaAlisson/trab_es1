import Logradouro from "./Logradouro";
import Bairro from "./Bairro";
import Cidade from "./Cidade";

export default class Endereco{
    private id: number;
    private cep: String;
    private logradouro: Logradouro;
    private bairro: Bairro;
    private cidade: Cidade;

    public setID(id:number) {
        this.id = id;
    }
    public getID() {
        return this.id;
    }

    public setCEP(cep:String) {
        this.cep = cep;
    }
    public getCEP() {
        return this.cep;
    }
    
}
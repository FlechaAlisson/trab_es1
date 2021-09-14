const TipoTransacao = require("./TipoTransacao");

class Transacao{
    data;
    valor;
    tipoTransacao = new TipoTransacao();
}

module.exports = Transacao;
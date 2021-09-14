const Transacao = require("../../servicos/TransacaoCol");

module.exports = (app) => {
    app.get('/extrato', async (req, res) => {

        req.body
        try{
            const extrato = await Transacao.emitirExtrato(req.body.id);
            
            return res.status(200).json({extrato: extrato});
        }catch(err){
            return res.status(400).json({ mensagem: err });
        }
    });

    app.post('/transferencia', async (req, res) => {
        try {
            await Transacao.criaTransferencia(
              req.body.cpf_correntista,
              req.body.cnpj_correntista,
              req.body.nro_conta_correntista,
              req.body.data_transferencia,
              req.body.cod_banco_favorecido,
              req.body.nro_agencia_favorecido,
              req.body.nro_conta_favorecido,
              req.body.valor
            );

            res.status(200).json({mensagem: "Transferencia concluida"});
        } catch (e) {
            res.status(400).json({mensagem: e});
        }
    })
}

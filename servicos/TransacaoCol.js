const transacaoDAO = require('./TransacaoDAO');

class TransacaoCol {
  async emitirExtrato(id) {
    try {
      const conta = await transacaoDAO.searchContaBancariaPorCliente(
        "cliente",
        "id",
        id
      );

      const transacoes = await transacaoDAO.listTransacoesPorId(id);

      return { transacoes: transacoes, conta_bancaria: conta };
    } catch (err) {
      console.log(err);

      throw err;
    }
  }

  async criaTransferencia(
    cpf_correntista,
    cnpj_correntista,
    nro_conta_correntista,
    data_transferencia,
    cod_banco_favorecido,
    nro_agencia_favorecido,
    nro_conta_favorecido,
    valor
  ) {

		// verifica tipo do valor
	  	if(typeof valor !== 'number' && valor > 1)
			throw "valor invalido";

		//verifica se a data é valida
		const data_verificada = this.verificaDataTransferencia(data_transferencia);

		try {
			//começa transacao
			await transacaoDAO.startTransaction();

			// verifica se existe o correntista
			const correntista = await transacaoDAO.searchContaBancariaPorCliente(
				"conta",
				'"numeroConta"',
				`'${nro_conta_correntista}'`
			);
				
			if(correntista.saldo < valor)
				throw "valor invalido";

			// verifica se existe o favorecido
			const favorecido = await transacaoDAO.searchContaBancariaPorCliente(
				"conta",
				'"numeroConta"',
				`'${nro_conta_favorecido}'`
			);

			await transacaoDAO.creditaConta(`'${nro_conta_favorecido}'`, valor);

			await transacaoDAO.debitaConta(`'${nro_conta_correntista}'`, valor);
			
			await transacaoDAO.insertTransacao(
				valor * -1,
				data_verificada,
				correntista.id,
				2,
				favorecido.id,
				'010 Transferencia Bancaria'
				);
				
			await transacaoDAO.insertTransacao(
				valor,
				data_verificada,
				favorecido.id,
				1,
				correntista.id,
				'010 Transferencia Bancaria'
				);

			await transacaoDAO.commitTransaction();

			return true;
		} catch (e) {
				await transacaoDAO.rollbackTransaction();
				
				throw e;
			}
	}

	verificaDataTransferencia(data_transferencia) {
		
		const limit = new Date();
		const date = new Date(data_transferencia);

		if (date.getTime() < limit.getTime()) {
			throw "Data de trasnferencia menor que a atual";
		}

		limit.setDate(limit.getDate() + 3);
		limit.setHours(20);
		limit.setMinutes(59);

		if (date.getTime() > limit.getTime()) {
			throw "Data de trasnferencia maior que o permitido";
		}

		return date;
	}
}

module.exports = new TransacaoCol()
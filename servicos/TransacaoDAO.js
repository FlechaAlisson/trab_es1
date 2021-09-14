const connection = require('../infra/connection');

class TransacaoDAO {
  async startTransaction() {
    await connection.query("BEGIN");
  }

  async commitTransaction() {
    await connection.query("COMMIT");
  }

  async rollbackTransaction() {
    await connection.query("ROLLBACK");
  }

  async searchContaBancariaPorCliente(tabela, coluna, key) {
    return await connection
      .query(
        `SELECT conta.id, cliente."primeiroNome", cliente.sobrenome, TRIM(cliente.cpf) as cpf, cliente.cnpj, telefone.telefone, email.email, genero.sigla as genero,
						conta."numeroConta", conta.saldo, agencia."agenciaNome", agencia."numeroAgencia" , banco."nomeBanco", banco."numeroBanco"
						FROM conta
							JOIN cliente ON conta.id_cliente = cliente.id
							JOIN telefone ON cliente.id_telefone = telefone.id
							JOIN email ON cliente.id_email = email.id
							JOIN genero ON cliente.id_genero = genero.id
							JOIN agencia ON agencia.id = conta.id_agencia
							JOIN banco ON agencia.id_banco = banco.id
						WHERE ${tabela}.${coluna} = ${key};`
      )
      .then((res) => {
        if (!res.rows.length) {
          throw "Usuario nao existe";
        }
        return res.rows[0];
      })
      .catch((e) => {
        throw e;
      });
  }

  async listTransacoesPorId(id) {
    return await connection
      .query(
        `SELECT valor, data, "tipoTransacao".tipo, motivo
						FROM transacao
					JOIN "tipoTransacao" on transacao."id_tipoTransacao" = "tipoTransacao".id
					JOIN conta on transacao.id_conta = conta.id
					JOIN cliente on conta.id_cliente = cliente.id
					WHERE cliente.id = ${id};
				`
      )
      .then((res) => {
        return res.rows;
      })
      .catch((e) => {
        throw e;
      });
  }

  async creditaConta(nroConta, valor) {
    await connection.query(
      `UPDATE conta SET saldo = saldo + ${valor} WHERE "numeroConta" = ${nroConta};`
    );
  }

  async debitaConta(nroConta, valor) {
    await connection.query(
      `UPDATE conta SET saldo = saldo - ${valor} WHERE "numeroConta" = ${nroConta};`
    );
  }

  async insertTransacao(valor, data_transferencia, id_correntista, tipoTransacao, id_favorecido, motivo){

	await connection.query(
		`insert into transacao (valor, data, id_conta, "id_tipoTransacao", "id_contaFavorecida", motivo)
				VALUES ($1, $2, $3, $4, $5, $6);`,
		[
		valor,
		data_transferencia,
		id_correntista,
		tipoTransacao,
		id_favorecido,
		motivo,
		]
	);
  }
}

module.exports = new TransacaoDAO();
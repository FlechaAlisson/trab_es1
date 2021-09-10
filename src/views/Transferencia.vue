<template>
  <v-container style="height: 100%" class="d-flex justify-center align-center">
    <v-card class="justify-center" width="750" height="600">
      <v-card-title style="margin-bottom: 25px"
        ><h1>Transferir</h1></v-card-title
      >
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col>
            <v-text-field
              disabled
              v-model="nome"
              :rules="[(v) => !!v || 'Este campo não pode ser vazio']"
              label="Nome"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              disabled
              v-model="cpf"
              v-mask="'###.###.###-##'"
              :rules="[(v) => !!v || 'Este campo não pode ser vazio']"
              label="CPF"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div>
              <v-text-field
                v-model="conta"
                :rules="[(v) => !!v || 'Este campo não pode ser vazio']"
                label="Nro. Conta bancária"
                required
              ></v-text-field>
            </div>
          </v-col>
          <v-col>
            <v-text-field
              v-model="data"
              v-mask="'##/##/####'"
              :rules="[
                (v) => !!v || 'Este campo não pode ser vazio',
                (v) => checkDate(v),
              ]"
              label="Data"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="codbanco"
              :rules="[(v) => !!v || 'Este campo não pode ser vazio']"
              label="Cod. banco"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="agencia"
              :rules="[(v) => !!v || 'Este campo não pode ser vazio']"
              label="Agencia"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="conta_dest"
              :rules="[(v) => !!v || 'Este campo não pode ser vazio']"
              label="Conta do favorecido"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="nome_dest"
              :rules="[(v) => !!v || 'Este campo não pode ser vazio']"
              label="Nome do favorecido"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="documento"
              :rules="[(v) => !!v || 'Este campo não pode ser vazio']"
              label="CPF/CNPJ"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="valor"
              :rules="[
                (v) => !!v || 'Este campo não pode ser vazio',
                (v) => v > 1 || 'O valor deve ser acima de um real',
              ]"
              label="Valor"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4 float-right"
          @click="cadastrar"
        >
          Cadastrar
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "Cadastro",
  data() {
    return {
      valid: false,
      nome: "João da silva",
      cpf: "12312312312",
      conta: "",
      data: "",
      codbanco: "",
      agencia: "",
      conta_dest: "",
      valor: 0.0,
      documento: "",
      nome_dest: "",
    };
  },
  methods: {
    cadastrar() {
      this.$refs.form.validate();
    },

    checkDate(v) {
      let dateString = v.substr(6, 4)+"-"+v.substr(3, 2)+"-"+v.substr(0, 2);
      const date1 = new Date(dateString);
      console.log(date1);
      const date2 = new Date();
      console.log(date2);
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;
      return diffDays < 2 || "Data inválida. Apenas 3 dias após a data atual"
    },
  },
};
</script>
<style scoped>
.v-card {
  padding: 15px;
}
</style>
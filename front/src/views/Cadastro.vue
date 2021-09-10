<template>
  <v-container style="height: 100%" class="d-flex justify-center align-center">
    <v-card class="justify-center" width="750" height="900">
      <v-card-title style="margin-bottom: 25px"><h1>Cadastro</h1></v-card-title>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row justify="space-around">
          <v-radio-group v-model="isPJ">
            <v-row>
              <v-col>
                <v-radio :value="false" label="Pessoa Fisica"></v-radio>
              </v-col>
              <v-col>
                <v-radio :value="true" label="Pessoa Juridica"></v-radio>
              </v-col>
            </v-row>
          </v-radio-group>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="nome"
              :rules="[(v) => !!v || 'Este campo não pode ser vazio']"
              label="Nome"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="sobrenome"
              :rules="[(v) => !!v || 'Este campo não pode ser vazio']"
              label="Sobrenome"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div v-if="isPJ">
              <v-text-field
                v-model="nomeSocial"
                :rules="[(v) => !!v || 'Este campo não pode ser vazio']"
                label="Nome Fantasia"
                required
              ></v-text-field>
            </div>
            <div v-else>
              <v-text-field
                v-model="nomeSocial"
                :rules="[(v) => !!v || 'Este campo não pode ser vazio']"
                label="Nome Social"
                required
              ></v-text-field>
            </div>
          </v-col>
          <v-col>
            <v-text-field
              v-model="end_pais"
              :rules="[(v) => !!v || 'Este campo não pode ser vazio']"
              label="Pais"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="end_estado"
              :rules="[(v) => !!v || 'Este campo não pode ser vazio']"
              label="Estado"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="end_cidade"
              :rules="[(v) => !!v || 'Este campo não pode ser vazio']"
              label="Cidade"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="end_bairro"
              :rules="[(v) => !!v || 'Este campo não pode ser vazio']"
              label="Bairro"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="end_logradouro"
              :rules="[(v) => !!v || 'Este campo não pode ser vazio']"
              label="Rua/Logradouro"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="end_complemento"
              :rules="[(v) => !!v || 'Este campo não pode ser vazio']"
              label="Complemento"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="end_numero"
              :rules="[(v) => !!v || 'Este campo não pode ser vazio']"
              label="Número"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          
          <v-col>
            <v-text-field
              v-model="ddd"
              :rules="[(v) => !!v || 'Este campo não pode ser vazio']"
              label="DDD"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="fone"
              :rules="[(v) => !!v || 'Este campo não pode ser vazio']"
              label="Telefone"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="email"
              :rules="[(v) => !!v || 'Este campo não pode ser vazio']"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <div v-if="isPJ">
              <v-text-field
                v-model="documento"
                :rules="[
                  (v) => !!v || 'Este campo não pode ser vazio',
                ]"
                label="CNPJ"
                required
              ></v-text-field>
            </div>
            <div v-else>
              <v-text-field
                v-model="documento"
                :rules="[
                  (v) => !!v || 'Este campo não pode ser vazio',
                  (v) => testaCPF(v),
                ]"
                label="CPF"
                required
              ></v-text-field>
            </div>
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
      isPJ: false,
      valid: false,
      nome: "",
      sobrenome: "",
      nomeSocial: "",
      end_pais: "",
      end_estado: "",
      end_cidade: "",
      end_bairro: "",
      end_logradouro: "",
      end_complemento: "",
      end_numero: "",
      email: "",
      ddd: "",
      fone: "",
      cpf: "",
    };
  },
  methods: {
    cadastrar() {
      this.$refs.form.validate();
    },
    testaCPF(strCPF) {
      var Soma;
      var Resto;
      Soma = 0;
      var i;
      if (strCPF == "00000000000") return false || "CPF inválido";

      for (i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;

      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(strCPF.substring(9, 10)))
        return false || "CPF inválido";

      Soma = 0;
      for (i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11)))
        return false || "CPF inválido";
      return true;
    },
  },
};
</script>
<style scoped>
.v-card {
  padding: 15px;
}
</style>
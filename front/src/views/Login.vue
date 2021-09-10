<template>
  <v-container style="height:100%;" class="d-flex justify-center align-center">
    <v-card align-self='center' justify='center' max-width="400" min-height="200">
      <v-card-text>
        <v-card-title>Login</v-card-title>
        <v-text-field v-model="cpf" v-mask="'###.###.###-##'" @keyup.enter="login"  label="CPF"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-row>
          <v-col>
            <v-btn primary @click="login"> Entrar </v-btn>
            <v-chip @click="cadastro" class="ma-2" color="success" outlined
              >Não tem cadastro?
            </v-chip>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      cpf: "",
    };
  },
  methods: {
    login() {
      if (this.cpf.length == 14) {
        this.$router.push({name: 'Home',  params: {cpf: this.cpf}})
      }
      else{
        window.alert('CPF inválido')
      }
    },
    cadastro(){
      this.$router.push({name: 'Cadastro'})
    }
  },
};
</script>
<style scoped>
.element.style{
  height: 100%;
}
</style>
<template>
  
  <v-container style="height: 100%" class="d-flex justify-center align-center">
    <v-card style="width: 1000px">
      <v-card-title
        >Extrato de João da Silva - CPF: 1231231312 <v-spacer></v-spacer>
        <v-btn style="float: right" primary @click="transferencia">
          Transferir
        </v-btn></v-card-title
      >

      <div>
        <v-data-table
          style="margin: 10px"
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
          :footer-props="{
            'items-per-page-options':[5],
            'page-text':''
          }"
        ></v-data-table>
        <v-card-text class="text-h6">Saldo: R$ 12.13</v-card-text>
      </div>
      
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "Home",
  props: {
    cpf: String,
  },
  data() {
    return {
      headers: [
        { text: "Data", align: "center", sortable: false, value: "data" },
        { text: "Cod.", align: "center", sortable: false, value: "cod" },
        { text: "Motivo", align: "center", sortable: false, value: "motivo" },
        { text: "Valor", align: "center", sortable: false, value: "valor" },
      ],
      desserts: [
        {
          data: "15/05/2020",
          cod: 123,
          motivo: "Pagando conta da luz",
          valor: "R$ 30.30",
        },
        {
          data: "23/05/2020",
          cod: 123,
          motivo: "Pagando conta da luz",
          valor: "R$ 30.30",
        },
        {
          data: "31/05/2020",
          cod: 123,
          motivo: "Pagando conta da luz",
          valor: "R$ 30.30",
        },{
          data: "31/05/2020",
          cod: 123,
          motivo: "Pagando conta da luz",
          valor: "R$ 30.30",
        },
        {
          data: "15/07/2020",
          cod: 123,
          motivo: "Pagando conta da luz",
          valor: "R$ 30.30",
        },
        {
          data: "15/12/2020",
          cod: 123,
          motivo: "Pagando conta da luz",
          valor: "R$ 30.30",
        },
      ],
    };
  },
  methods: {
    transferencia() {
      this.$router.push({ name: "Transferencia" });
    },
  },
};
</script>

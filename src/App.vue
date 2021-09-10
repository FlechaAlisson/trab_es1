<template>
    <v-app>
      <v-main >
      <router-view/>
    </v-main>
    </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
  }),
};
</script>

<style>
  .v-main{
    width: 100%;
  }
</style>

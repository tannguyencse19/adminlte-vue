<template>
  <!-- Lam theo kieu company footer (xem docs) -->
  <!-- <v-footer app inset absolute>
    <div>
      <b>Version</b>
      3.1.0
    </div>
    <strong>
      Copyright &copy; 2014-2021
      <a href="https://adminlte.io">{ tenCongTy }</a>
    </strong>
    All rights reserved.
  </v-footer> -->
  <v-footer color="primary lighten-1" padless app inset absolute>
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">
        {{ link }}
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
  }),
};
</script>

<style>
</style>
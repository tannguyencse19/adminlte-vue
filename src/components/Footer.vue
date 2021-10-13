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
  <v-footer class="navbar-bg" padless app inset absolute>
    <v-row justify="center" no-gutters>
      <!-- <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">
        {{ link }}
      </v-btn> -->
      <v-col class="py-4 text-center white--text" cols="12">
        <div>
          <b>Version</b>
          3.1.0
        </div>
        <strong>
          Copyright &copy; 2014-2021
          <a href="https://github.com/tannguyencse19" style="color: orange;">Tan Nguyen</a>
        </strong>
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

<style scoped>
.navbar-bg {
  background: linear-gradient(93.34deg, #3b23c1 2.76%, #6714a4 52.76%);
}
</style>
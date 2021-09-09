<template>
  <body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
      <!-- <Header /> -->

      <!-- <v-main> -->
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <router-view />
      <!-- </v-main> -->

      <!-- <Footer /> -->
    </div>
  </body>
</template>

<script>
/* eslint-disable vue/no-unused-components */
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar.vue"
import Sidebar from "@/components/Sidebar/Sidebar.vue"

export default {
  name: "Home",
  components: {
    Navbar,
    Sidebar,
  },
};
</script>

<style scoped></style>

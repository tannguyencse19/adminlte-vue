<template>
  <!-- Chu y: Khong dung v-app de bi overrided style -->
  <div>
    <!-- <Header /> -->

    <v-main>
      <!-- <Breadcrumb /> -->
      <router-view />
      <Dashboard />
      <!-- <v-btn @click="$root.$emit('show-modal:quickview')" depressed color="primary">
        click to show modal quickview
      </v-btn> -->
    </v-main>

    <!-- <Footer /> -->
  </div>
</template>

<script>
  // import Header from "@/components/Header";
  // import Footer from "@/components/Footer";
  // import Modal from "@/components/Modal.vue";
  import Breadcrumb from "@/components/Breadcrumb.vue";
  import Dashboard from "../Dashboard/Dashboard.vue";

  export default {
    name: "Home",
    components: {
      Breadcrumb,
      Dashboard,
    },
  };
</script>

<style scoped></style>

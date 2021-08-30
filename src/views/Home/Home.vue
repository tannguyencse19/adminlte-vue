<template>
  <!-- Chu y: Khong dung v-app de bi overrided style -->
  <div>
    <!-- <Header /> -->

    <v-main>
      <Breadcrumb />
      <router-view />
      <v-btn to="/login">Login</v-btn>
      <!-- <v-btn @click="$root.$emit('show-modal:quickview')" depressed color="primary">
        click to show modal quickview
      </v-btn> -->
    </v-main>

    <!-- <Footer /> -->

    <!-- <Modal /> -->
  </div>
</template>

<script>
  /* eslint-disable vue/no-unused-components */
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";
  import Modal from "@/components/Modal.vue";
  import Breadcrumb from "@/components/Breadcrumb.vue";

  export default {
    name: "Home",
    data() {
      return {};
    },
    components: {
      Header,
      Footer,
      Modal,
      Breadcrumb,
    },
    methods: {},
  };
</script>

<style scoped></style>

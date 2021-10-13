<template>
  <v-app id="inspire">
    <Sidebar :drawerProp="drawer" />

    <Navbar @toggleSidebar="() => drawer = !drawer" />

    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Sidebar,
    Footer,
  },
  data: () => ({
    drawer: true,
  }),
};
</script>

<style>
:root {
  --scrollbar-width: 10px;
  --app-color: #3d99ce;
}
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.pointer {
  cursor: pointer;
}
::-webkit-scrollbar {
  width: var(--scrollbar-width);
}
::-webkit-scrollbar-thumb {
  background: var(--app-color);
  border-radius: 50px;
}

</style>
<template>
  <v-app id="inspire">
    <Sidebar :drawerProp="drawer" />

    <Navbar @toggleSidebar="() => (drawer = !drawer)" />

    <v-main>
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "AfterLogin",
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

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(5%);
}
</style>

<template>
  <body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <router-view></router-view>
    </div>
  </body>
</template>

<script>
import Navbar from "../Navbar/Navbar.vue";
import Sidebar from "./Sidebar.vue";

export default {
  name: "Test",
  components: {
    Navbar,
    Sidebar,
  },
};
</script>

<style src="./Dashboard.css">
</style>
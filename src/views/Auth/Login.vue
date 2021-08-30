<template src="./Login.html"></template>
<script>
  export default {
    name: "Login",
    mounted() {
      let jquery = document.createElement("script");
      jquery.setAttribute("src", "../../plugins/jquery/jquery.min.js");
      document.head.appendChild(jquery);

      let bootstrap = document.createElement("script");
      bootstrap.setAttribute("src", "../../plugins/bootstrap/js/bootstrap.bundle.min.js");
      document.head.appendChild(bootstrap);

      let adminlte = document.createElement("script");
      adminlte.setAttribute("src", "../../dist/js/adminlte.min.js");
      document.head.appendChild(adminlte);
    },
  };
</script>
<style>
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback");
  @import url("../../plugins/icheck-bootstrap/icheck-bootstrap.min.css");
  @import url("../../plugins/fontawesome-free/css/all.min.css");
  @import url("../../plugins/dist/css/adminlte.min.css");
</style>

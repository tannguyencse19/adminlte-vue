<template src="./ForgotPassword.html"></template>
<script>
  export default {
    name: "ForgotPassword",
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
<style src="./main.css"></style>

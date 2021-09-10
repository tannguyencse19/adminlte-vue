<template>
  <Breadcrumbs />
</template>

<script>
  import Vue from "vue";
  import VueBreadcrumbs from "vue-2-breadcrumbs";
  Vue.use(VueBreadcrumbs);
  export default {
    name: "Breadcrumb",
  };
</script>

<style>
  .breadcrumb {
    display: flex;
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
    list-style: none;
    background-color: rgb(66, 185, 131, 0.2);
    margin-top: 0;
    margin-bottom: 16px;
  }
  .breadcrumb-item + .breadcrumb-item {
    padding-left: 6px;
  }
  .breadcrumb-item + .breadcrumb-item::before {
    display: inline-block;
    color: #2c3e50;
    content: "/";
  }
  .breadcrumb-item a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }
  .breadcrumb-item span {
    color: #42b983;
  }
</style>

<template>
  <div class="home">
    <h1>Danh mục cún</h1>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {},
  };
</script>

<style scoped></style>

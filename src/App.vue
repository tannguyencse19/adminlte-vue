<template>
  <!-- Chu y: Hien khong dung v-app de khong bi override style -->
  <div id="app">
    <!-- Chu y: Home cung la 1 router nen ko can import component -->
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "App",
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

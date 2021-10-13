<template>
  <v-app-bar app dark absolute class="navbar-bg" >
    <v-app-bar-nav-icon @click="toggleSidebar" />

    <v-toolbar-title>Homepage</v-toolbar-title>

    <v-spacer />

    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on" right>
          <v-badge :content="messages" :value="messages" color="red" overlap>
            <v-icon>mdi-chat</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-badge :content="messages" :value="messages" color="green" overlap light>
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn to="/login" text>Login</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    messages: 10,
  }),
  methods: {
    toggleSidebar() {
      this.$emit("toggleSidebar");
    },
  },
};
</script>

<style scoped>
.navbar-bg {
  background: linear-gradient(93.34deg, #3b23c1 2.76%, #6714a4 52.76%);
}
</style>
<template>
  <v-navigation-drawer v-model="drawerProp" app class="sidebar-bg">
    <router-link to="/">
      <v-card flat class="p-3 pb-0">
        <v-img src="@/img/logo.png" />
      </v-card>
    </router-link>

    <v-divider />

    <router-link to="/profile">
      <v-card flat class="pl-3 pr-3">
        <v-avatar size="36">
          <img src="@/plugins/dist/img/user2-160x160.jpg" alt="user-avatar" />
        </v-avatar>
        Alexander Pierce
      </v-card>
    </router-link>

    <v-divider />

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" exact link :to="item.link" dark>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["drawerProp"],
  data: () => ({
    items: [
      { title: "Dashboard", icon: "mdi-home", link: "/" },
      { title: "Inbox", icon: "mdi-message", link: "/inbox" },
      { title: "Calendar", icon: "mdi-calendar", link: "/calendar" },
      { title: "Project", icon: "mdi-briefcase", link: "/project" },
      { title: "User List", icon: "mdi-account", link: "/user-list" },
      { title: "Admin List", icon: "mdi-account-lock", link: "/admin-list" },
    ],
  }),
};
</script>

<style scoped>
.sidebar-bg {
  background-color: rgb(48, 65, 86) !important;
}
.v-list .v-list-item--active {
  color: rgb(120, 120, 255) !important;
}
</style>
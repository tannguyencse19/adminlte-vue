<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
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
        <v-list-item v-for="item in items" :key="item.title" exact link :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark class="navbar-color">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Homepage</v-toolbar-title>

      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
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
            <v-badge :content="messages" :value="messages" color="yellow" overlap>
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

    <v-main>
      <router-view />
    </v-main>

    <!-- Lam theo kieu company footer (xem docs) -->
    <v-footer app inset absolute>
      <div>
        <b>Version</b>
        3.1.0
      </div>
      <strong>
        Copyright &copy; 2014-2021
        <a href="https://adminlte.io">{ tenCongTy }</a>
      </strong>
      All rights reserved.
    </v-footer>
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
    drawer: null,
    items: [
      { title: "Dashboard", icon: "mdi-home", link: "/" },
      { title: "Inbox", icon: "mdi-message", link: "/inbox" },
      { title: "Calendar", icon: "mdi-calendar", link: "/calendar" },
      { title: "Project", icon: "mdi-briefcase", link: "/project" },
      { title: "User List", icon: "mdi-account", link: "/user-list" },
      { title: "Admin List", icon: "mdi-account-lock", link: "/admin-list" },
    ],
    messages: 10,
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
/* navbar */
.navbar-color {
  background: linear-gradient(93.34deg, #3b23c1 2.76%, #6714a4 52.76%);
}
/* sidebar */
.v-list .v-list-item--active {
  color: blue !important;
}
</style>
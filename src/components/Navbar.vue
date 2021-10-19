<template>
  <v-app-bar app dark absolute class="navbar-bg">
    <v-app-bar-nav-icon @click="toggleSidebar" />

    <v-toolbar-title>Homepage</v-toolbar-title>

    <v-spacer />

    <v-menu offset-y class="hide-scrollbar">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-badge :content="messages" :value="messages" color="red" overlap light>
            <v-icon>mdi-chat</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list three-line height="400px" width="450px" style="overflow-y: auto">
        <template v-for="(item) in items">
          <v-subheader v-if="item.header" :key="item.header" v-text="item.header" />

          <v-list-item v-else :key="item.title">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-menu>

    <v-menu offset-y class="hide-scrollbar">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-badge :content="messages" :value="messages" color="green" overlap light>
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list three-line height="400px" width="450px" style="overflow-y: auto">
        <template v-for="(item) in items">
          <v-subheader v-if="item.header" :key="item.header" v-text="item.header" />

          <v-list-item v-else :key="item.title">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-menu>

    <v-btn @click="handleLogout" text>Logout</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    messages: 10,
    items: [
      { header: "Today" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle:
          '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle:
          '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
    ],
  }),
  methods: {
    toggleSidebar() {
      this.$emit("toggleSidebar");
    },
    handleLogout() {
      window.localStorage.removeItem("user");
      this.$router.push({name: "login"})
    }
  },
};
</script>

<style scoped>
.navbar-bg {
  background: linear-gradient(93.34deg, #3b23c1 2.76%, #6714a4 52.76%);
}

.v-list::-webkit-scrollbar {
  width: 8px;
}

.v-list::-webkit-scrollbar-thumb {
  background-color: var(--v-secondary-lighten5);
  width: 8px;
}
</style>
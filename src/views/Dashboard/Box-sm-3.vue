<template>
  <v-hover v-slot="{ hover }">
    <v-card :class="color" color="accent-3" dark to="/box" :elevation="hover ? 8 : 4">
      <v-card-text>
        <v-row justify="space-between">
          <v-col md="4" cols="6">
            <h3 class="text-h4 font-weight-bold white--text">6</h3>
            <p class="white--text">{{ name }}</p>
          </v-col>
          <v-spacer />
          <v-col md="4" cols="6">
            <v-icon
              size="84px"
              style="color: rgba(0, 0, 0, 0.15)"
              :class="{ 'icon-on-hover': hover }"
            >
              {{ icon }}
            </v-icon>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions style="justify-content: center" class="accent-4" :class="color">
        More info
        <v-icon class="ml-1">mdi-arrow-right-bold-circle</v-icon>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "Box",
  props: ["name", "color", "icon"],
};
</script>

<style scoped>
.v-card {
  transition: all 0.2s ease-in-out;
}

/* .v-card:not(.on-hover) {
  opacity: 0.6;
} */

.icon-on-hover {
  transform: scale(1.1);
}
</style>
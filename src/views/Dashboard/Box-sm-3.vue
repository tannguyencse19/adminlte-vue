<template>
  <v-app>
    <v-col sm="3" cols="12">
      <!-- need hover -->
      <router-link to="/project" class="small-box bg-blue elevation-4 box">
        <v-row>
          <v-col md="6" cols="6" class="pl-5">
            <h3>6</h3>
            <p>Tasks</p>
          </v-col>
          <v-col md="6" cols="6">
            <div class="icon">
              <i class="fas fa-briefcase"></i>
            </div>
          </v-col>
        </v-row>
        <v-row class="small-box-footer">
          More info
          <i class="fas fa-arrow-circle-right"></i>
        </v-row>
      </router-link>

      <v-card color="blue accent-3" dark>
        <v-card-text>
          <v-row justify="space-between">
            <v-col md="4" cols="6">
              <h3>6</h3>
              <p>Tasks</p>
            </v-col>
            <v-spacer></v-spacer>
            <v-col md="4" cols="6">
              <v-icon size="72px">mdi-briefcase</v-icon>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions style="justify-content: center;">
          More info
          <v-icon class="ml-1">mdi-arrow-right-bold-circle</v-icon>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
</style>
<template>
  <v-col sm="6" cols="12">
    <!-- need hover -->
    <router-link to="/project" class="small-box bg-blue elevation-4 box">
      <div class="inner pl-5">
        <v-row>
          <v-col md="4" cols="12">
            <h3>6</h3>
            <p>Open Tasks</p>
          </v-col>
          <v-col md="4" cols="12">
            <h3>0</h3>
            <p>Closed Tasks</p>
          </v-col>
        </v-row>
      </div>
      <div class="icon">
        <i class="fas fa-briefcase"></i>
      </div>
      <div class="small-box-footer">
        More info
        <i class="fas fa-arrow-circle-right"></i>
      </div>
    </router-link>
  </v-col>
  <v-col sm="6" cols="12">
    <!-- need hover -->
    <router-link to="/calendar" class="small-box bg-yellow elevation-4 box">
      <div class="inner pl-5">
        <v-row>
          <v-col md="4" cols="12">
            <h3>6</h3>
            <p>Open Events</p>
          </v-col>
          <v-col md="4" cols="12">
            <h3>0</h3>
            <p>Closed Events</p>
          </v-col>
        </v-row>
      </div>
      <div class="icon">
        <i class="fas fa-calendar"></i>
      </div>
      <div class="small-box-footer">
        More info
        <i class="fas fa-arrow-circle-right"></i>
      </div>
    </router-link>
  </v-col>
</template>

<script>
export default {};
</script>

<style>
</style>
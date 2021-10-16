<template>
  <div>
    <!-- Content Header (Page header) -->
    <v-container class="pl-5 pr-5" fluid>
      <div class="row mb-2">
        <div class="col-sm-6">
          <h2 class="m-0">Welcome Alexander Pierce</h2>
          <p>Department: Human Resources</p>
        </div>
        <!-- /.col -->
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item">
              <router-link to="/">Home</router-link>
            </li>
          </ol>
          <!-- <div>Widget option</div> -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </v-container>
    <!-- /.container-fluid -->

    <!-- Main content -->
    <v-container class="pl-5 pr-5" fluid>
      <!-- Stat box -->
      <v-row>
        <v-col sm="3" cols="12">
          <Box :name="`Tasks`" :color="`blue`" :icon="`mdi-briefcase-variant`" :to="`/project`" />
        </v-col>
        <v-col sm="3" cols="12">
          <Box :name="`Inbox`" :color="`green`" :icon="`mdi-message`" :to="`/inbox`" />
        </v-col>
        <v-col sm="3" cols="12">
          <Box :name="`Event`" :color="`amber`" :icon="`mdi-calendar`" :to="`/calendar`" />
        </v-col>
        <v-col sm="3" cols="12">
          <Box :name="`Issues`" :color="`red`" :icon="`mdi-alert`" :to="`/project`" />
        </v-col>
      </v-row>
      <!-- ./end stat box -->

      <v-row>
        <v-col lg="6" cols="12">
          <Table :title="`My Tasks`" />
        </v-col>
        <v-col lg="6" cols="12">
          <Table :title="`My Events`" />
        </v-col>
      </v-row>
    </v-container>
    <!-- /.container-fluid -->
    <!-- /.content -->
  </div>
</template>

<script>
import Table from "./Table.vue";
import Box from "./Box-sm-3.vue";

export default {
  name: "Dashboard",
  components: {
    Table,
    Box,
  },
};
</script>

<style scoped>
.box {
  transition: all 0.2s ease-in-out;
}

.box:hover {
  box-shadow: 0px 4px 8px -2px rgba(0, 0, 0, 0.4), 0px 8px 10px 0px rgba(0, 0, 0, 0.28),
    0px 2px 20px 0px rgba(0, 0, 0, 0.24) !important;
}
</style>

<template>
  <div>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0">Welcome [user-name]</h1>
              <p>Company: [email]</p>
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
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

      <!-- Main content -->
      <v-app>
        <v-main>
          <v-container>
            <!-- Stat box -->
            <v-row>
              <v-col sm="6" cols="12">
                <router-link to="/project" class="info-box p-0">
                  <span class="info-box-icon bg-info flex-column">
                    <i class="far fa-envelope"></i>
                    <b class="text-sm">My Tasks</b>
                  </span>
                  <!-- /.info-box-icon -->
                  <div class="info-box-content flex-row align-items-center">
                    <span class="info-box-text text-green text-bold">Open</span>
                    <span class="info-box-number m-0 ml-1">6</span>
                  </div>
                  <!-- /.info-box-content -->
                  <div class="info-box-content flex-row align-items-center">
                    <span class="info-box-text text-red text-bold">Closed</span>
                    <span class="info-box-number m-0 ml-1">0</span>
                  </div>
                  <!-- /.info-box-content -->
                </router-link>
                <!-- /.info-box -->
              </v-col>
              <v-col sm="6" cols="12">
                <router-link to="/calendar" class="info-box p-0">
                  <span class="info-box-icon bg-success flex-column">
                    <i class="far fa-envelope"></i>
                    <b class="text-sm">My Events</b>
                  </span>
                  <!-- /.info-box-icon -->
                  <div class="info-box-content flex-row align-items-center">
                    <span class="info-box-text text-green text-bold">Open</span>
                    <span class="info-box-number m-0 ml-1">6</span>
                  </div>
                  <!-- /.info-box-content -->
                  <div class="info-box-content flex-row align-items-center">
                    <span class="info-box-text text-red text-bold">Closed</span>
                    <span class="info-box-number m-0 ml-1">0</span>
                  </div>
                  <!-- /.info-box-content -->
                </router-link>
                <!-- /.info-box -->
              </v-col>
            </v-row>
            <!-- ./end stat box -->

            <v-row>
              <v-col lg="6" cols="12">
                <Table>
                  <template v-slot:tableTitle>My Tasks</template>
                </Table>
              </v-col>
              <v-col lg="6" cols="12">
                <Table>
                  <template v-slot:tableTitle>My Events</template>
                </Table>
              </v-col>
            </v-row>
          </v-container>
          <!-- /.container-fluid -->
        </v-main>
      </v-app>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
  </div>
</template>

<script>
import Table from "./Table.vue";
import Box from "./Box.vue";

export default {
  name: "Dashboard",
  components: {
    Table,
    // eslint-disable-next-line vue/no-unused-components
    Box,
  },
};
</script>

<style  scoped  />

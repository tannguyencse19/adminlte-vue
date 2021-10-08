<template>
  <div>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0">Welcome Alexander Pierce</h1>
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
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

      <!-- Main content -->
      <v-app>
        <v-main>
          <!-- container chua co fluid -->
          <v-container class="pl-5 pr-5">
            <!-- Stat box -->
            <v-row>
              <v-col sm="6" cols="12">
                <!-- need hover -->
                <!-- :class="hover ? `elevation-4` : `elevation-8`" -->
                <v-hover v-slot="{ hoverAPI }">
                  <router-link
                    to="/project"
                    class="small-box bg-primary elevation-4 box"
                    :class="{ 'elevation-8': hoverAPI }"
                  >
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
                </v-hover>
              </v-col>
              <v-col sm="6" cols="12">
                <router-link to="/calendar" class="info-box p-0 elevation-4">
                  <span class="info-box-icon bg-fuchsia flex-column">
                    <i class="far fa-envelope text-white"></i>
                    <b class="text-sm text-white">My Events</b>
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

<style scoped>
.box {
  transition: all 0.2s ease-in-out;
}

.box:hover {
  box-shadow: 0px 4px 8px -2px rgba(0, 0, 0, 0.4), 0px 8px 10px 0px rgba(0, 0, 0, 0.28),
    0px 2px 20px 0px rgba(0, 0, 0, 0.24) !important;
}
</style>

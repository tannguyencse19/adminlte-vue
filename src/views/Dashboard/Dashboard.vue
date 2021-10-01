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
      <section class="content">
        <div class="container-fluid">
          <v-app>
            <div class="row">
              <section class="col-lg-6">
                <Table></Table>
                <Table></Table>
              </section>
              <section class="col-lg-6">
                <Table></Table>
                <Table></Table>
              </section>
            </div>
          </v-app>
        </div>
        <!-- /.container-fluid -->
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
  </div>
</template>

<script>
import Table from "./Table.vue";

export default {
  name: "Dashboard",
  components: {
    Table,
  },
};
</script>

<style  scoped  />

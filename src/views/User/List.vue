<template>
  <div class="wrapper">
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>User List</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">User List</li>
              </ol>
            </div>
          </div>
        </div>
        <!-- /.container-fluid -->
      </section>

      <!-- Main content -->
      <section class="content">
        <!-- Vuetify component start here -->
        <v-app>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
          />
        </v-app>
      </section>
    </div>
    <!-- /.content-wrapper -->
  </div>
  <!-- ./wrapper -->
</template>

<script>
import UserList from "@/json/UserList.json";

export default {
  name: "UserList",
  data: () => ({
    headers: [
      { text: "Employee Name", value: "name" },
      { text: "Username", value: "username" },
      { text: "Email", value: "email" },
      { text: "Role", value: "role" },
      { text: "Status", value: "status" },
    ],
    desserts: UserList,
  }),
};
</script>

<style>
</style>
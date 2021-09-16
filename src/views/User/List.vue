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
            :items-per-page="10"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-dialog v-model="dialog" max-width="500px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                      New Item
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title>
                      <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.name"
                              label="Dessert name"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.username"
                              label="username"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.email"
                              label="email (g)"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.role" label="role (g)"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.status"
                              label="status (g)"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                      <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title class="text-h5">
                      Are you sure you want to delete this item?
                    </v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                      <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-btn @click="handleDownload">Download</v-btn>

                <import-excel :on-success="handleSuccess"></import-excel>

                <input type="file" id="input" />
              </v-toolbar>
            </template>

            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
              <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
              <v-btn icon to="/profile">
                <v-icon small @click="viewItem(item)">mdi-eye</v-icon>
              </v-btn>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
          </v-data-table>
        </v-app>
      </section>
    </div>
    <!-- /.content-wrapper -->
  </div>
  <!-- ./wrapper -->
</template>

<script>
import UserList from "@/json/UserList.json";
import ImportExcel from "./Import.vue"

// eslint-disable-next-line no-unused-vars
import readXlsxFile from "read-excel-file";
// const input = document.getElementById('input')
// input.addEventListener('change', () => {
//   readXlsxFile(input.files[0]).then((rows) => {
//     // `rows` is an array of rows
//     // each row being an array of cells.
//   })
// })

export default {
  name: "UserList",
  components: {
    ImportExcel,
  },
  data: () => ({
    headers: [
      { text: "Code", value: "code" },
      { text: "Employee Name", value: "name" },
      { text: "Username", value: "username" },
      { text: "Email", value: "email" },
      { text: "Role", value: "role" },
      { text: "Status", value: "status" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    headersToExport: {
      Code: "code",
      "Employee name": "name",
      Username: "username",
      Email: "email",
      Role: "role",
    },
    desserts: [],
    dialog: false,
    dialogDelete: false,
    editedIndex: -1,
    editedItem: {
      name: "",
      username: "",
      email: "",
      role: "",
      status: "",
    },
    defaultItem: {
      name: "",
      username: "",
      email: "",
      role: "",
      status: "",
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = UserList;
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    // eslint-disable-next-line no-unused-vars
    viewItem(item) {
      console.log("Chuc nang chua hien thuc");
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },

    handleDownload() {
      this.downloadLoading = true;
      import("./Export2Excel").then((excel) => {
        const tHeader = ["Code", "Employee Name", "Username", "Email", "Role"];
        const filterVal = ["code", "name", "username", "email", "role"];
        const data = UserList.map((row) => filterVal.map((col) => row[col]));
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: "test-export",
          // bookType: , (xlsx default), csv, txt
        });
      });
    },

    handleSuccess({ results, header }) {
      console.log(header);
      console.log(results);
    }
  },
};
</script>

<style>
</style>
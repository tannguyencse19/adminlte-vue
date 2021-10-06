<template>
  <v-card class="mb-5" elevation="4">
    <v-card-title class="justify-space-between pb-0 text-body-1 font-weight-normal">
      <slot name="tableTitle"></slot>
      <v-btn icon @click="toggleBtn = !toggleBtn">
        <v-icon v-if="toggleBtn" color="blue darken-2">mdi-eye</v-icon>
        <v-icon v-else color="blue darken-2">mdi-eye-off</v-icon>
      </v-btn>
    </v-card-title>
    <v-expand-transition>
      <v-card-text v-show="toggleBtn" class="pb-0">
        <v-simple-table fixed-header height="300px">
          <template v-slot:default>
            <!-- <thead>
              <tr class="">
                <th class="text-left black--text text-body-2 font-weight-bold">Name</th>
                <th class="text-left black--text text-body-2 font-weight-bold">Due date</th>
              </tr>
            </thead> -->
            <tbody>
              <tr v-for="item in tasks" :key="item.id">
                <td class="font-weight-medium text-body-2" style="width: 70%;">{{ item.name }}</td>
                <td class="font-weight-medium text-orange text-body-2 text-right">{{ item.due }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      toggleBtn: true,
      tasks: [
        {
          id: 1,
          name: "Multiple users can be owners of the same task.",
          due: "08-18-2021",
        },
        {
          id: 2,
          name: "The Start & End (Due) dates can be provided",
          due: "08-19-2021",
        },
        {
          id: 3,
          name: "Multiple users can be owners of the same task.",
          due: "08-18-2021",
        },
        {
          id: 4,
          name: "The Start & End (Due) dates can be provided",
          due: "08-19-2021",
        },
        {
          id: 5,
          name: "Multiple users can be owners of the same task.",
          due: "08-18-2021",
        },
        {
          id: 6,
          name: "The Start & End (Due) dates can be provided",
          due: "08-19-2021",
        },
        {
          id: 7,
          name: "Multiple users can be owners of the same task.",
          due: "08-18-2021",
        },
        {
          id: 8,
          name: "The Start & End (Due) dates can be provided",
          due: "08-19-2021",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-data-table >>> ::-webkit-scrollbar {
  width: 6px;
}

.v-data-table >>> ::-webkit-scrollbar-thumb {
  /* background: rgb(184, 184, 184); */
  background: var(--v-secondary-lighten5);
}
</style>
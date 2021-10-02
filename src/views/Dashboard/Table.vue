<template>
  <v-card class="mb-5">
    <v-card-title class="justify-space-between pb-0">
      <slot name="tableTitle"></slot>
      <v-btn icon @click="toggleBtn = !toggleBtn"><v-icon>mdi-eye</v-icon></v-btn>
    </v-card-title>
    <v-expand-transition>
      <v-card-text v-show="toggleBtn" class="pb-0">
        <v-simple-table fixed-header height="300px">
          <template v-slot:default>
            <!-- <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Due date</th>
              </tr>
            </thead> -->
            <tbody>
              <tr v-for="item in tasks" :key="item.name">
                <td class="font-weight-medium" style="width: 70%">{{ item.name }}</td>
                <td class="text-orange">{{ item.due }}</td>
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
          name: "Multiple users can be owners of the same task.",
          due: "08-18-2021",
        },
        {
          name: "The Start & End (Due) dates can be provided",
          due: "08-19-2021",
        },
        {
          name: "Multiple users can be owners of the same task.",
          due: "08-18-2021",
        },
        {
          name: "The Start & End (Due) dates can be provided",
          due: "08-19-2021",
        },
        {
          name: "Multiple users can be owners of the same task.",
          due: "08-18-2021",
        },
        {
          name: "The Start & End (Due) dates can be provided",
          due: "08-19-2021",
        },
        {
          name: "Multiple users can be owners of the same task.",
          due: "08-18-2021",
        },
        {
          name: "The Start & End (Due) dates can be provided",
          due: "08-19-2021",
        },
      ],
    };
  },
};
</script>

<style>
</style>
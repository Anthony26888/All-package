<template lang="">
  <v-card class="mt-3">
    <v-toolbar class="bg-primary">
      <v-toolbar-title>List Task</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          prepend-icon="mdi-plus"
          class="text-none text-subtitle-1"
          size="small"
          @click="store.AddTaskDialog = true"
          >New Task</v-btn
        >
      </v-toolbar-items>
    </v-toolbar>
    <v-card-title class="d-flex align-center pe-2">
      <v-btn
        variant="tonal"
        color="primary"
        size="small"
        class="ma-2 pa-2"
        @click="search = 'todo'"
        >To Do</v-btn
      >
      <v-btn
        variant="tonal"
        color="warning"
        size="small"
        class="ma-2 pa-2"
        @click="search = 'progress'"
        >In Progress</v-btn
      >
      <v-btn
        variant="tonal"
        color="success"
        size="small"
        class="ma-2 pa-2"
        @click="search = 'done'"
        >Done</v-btn
      >

      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        density="compact"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        single-line
      ></v-text-field>
    </v-card-title>

    <v-divider></v-divider>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="store.Tasks"
        :search="search"
        :items-per-page="10"
        @click:row="store.DetailTaskDialog = true"
      >
        <template v-slot:item.Status="{ item }">
          <v-chip :color="getColor(item.Status)">
            {{ item.Status }}
          </v-chip>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-btn
            color="primary"
            prepend-icon="mdi-pencil"
            @click.stop="store.EditDeviceDialog = true"
            size="x-small"
            width="70"
            >Edit</v-btn
          ><br />
          <v-btn
            color="red"
            prepend-icon="mdi-close-circle"
            @click.stop="store.DeleteDeviceDialog = true"
            size="x-small"
            width="70"
            >Delete</v-btn
          >
        </template>
        <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
          <div class="d-flex align-center justify-center pa-4">
            <v-btn
              :disabled="page === 1"
              density="comfortable"
              icon="mdi-arrow-left"
              variant="tonal"
              rounded
              @click="prevPage"
            ></v-btn>

            <div class="mx-2 text-caption">
              Page {{ page }} of {{ pageCount }}
            </div>

            <v-btn
              :disabled="page >= pageCount"
              density="comfortable"
              icon="mdi-arrow-right"
              variant="tonal"
              rounded
              @click="nextPage"
            ></v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>
<script setup>
import { useAppStore } from "@/stores/app";
</script>
<script>
const store = useAppStore();
store.FetchTasks();
export default {
  data() {
    return {
      search: "",
      page: 1,
      pageCount: 10,
      headers: [
        {
          align: "start",
          key: "Status",
          title: "Status",
        },
        { key: "Company", title: "Company" },
        { key: "Title", title: "Project" },
        { key: "Engineer", title: "Engineer" },
        { key: "Date", title: "Date" },
        {
          align: "start",
          text: "Actions",
          value: "actions",
          sortable: false,
          title: "Actions",
        },
      ],
    };
  },
  methods: {
    getColor(Color) {
      if (Color == "todo") return "primary";
      else if (Color == "progress") return "warning";
      else return "success";
    },
  },
};
</script>
<style scoped>
.hover-list:hover {
  background: #bbdefb;
}
.card-detail {
  color: "black";
  background: #e0e4ea;
  border-radius: 20px;
}
</style>

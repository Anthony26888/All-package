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
      <v-data-table-server
        :headers="headers"
        :items="store.Members"
        :search="search"
        :items-per-page="10"
        loading-text="Loading... Please wait"
        :items-length="0"
        :loading="LoadingTable"
      >
        <template v-slot:item.Available="{ item }">
          <v-chip
            :color="item.Available ? 'green' : 'blue'"
            :text="item.Available ? 'Available' : 'Unvailable'"
          >
          </v-chip>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-btn
            color="primary"
            prepend-icon="mdi-pencil"
            size="x-small"
            width="70"
            @click="store.DetailMembers(item.id)"
            >Edit</v-btn
          ><br />
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
      </v-data-table-server>
    </v-card-text>
  </v-card>
</template>
<script setup>
import { useAppStore } from "@/stores/app";
</script>
<script>
const store = useAppStore();
store.FetchMember();
export default {
  data() {
    return {
      LoadingTable: true,
      search: "",
      page: 1,
      pageCount: 10,
      headers: [
        {
          align: "start",
          key: "Available",
          title: "Status",
        },
        { key: "Name", title: "Name" },
        { key: "Sex", title: "Sex" },
        { key: "Contact", title: "Contact" },
        { key: "Address", title: "Address" },
        { key: "Birth", title: "Birth" },
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
  mounted() {
    setTimeout(() => {
      this.LoadingTable = false;
    }, 4500);
  },
  methods: {},
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

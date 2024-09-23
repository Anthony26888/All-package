<template lang="">
  <v-card class="mt-2">
    <v-toolbar class="bg-primary">
      <v-toolbar-title>Infomation</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        icon="mdi-pencil"
        class="text-none text-subtitle-1"
        size="small"
        @click="store.EditClientDialog = true"
      ></v-btn>
    </v-toolbar>
    <v-card-title
      ><h3>{{ store.DetailClient.Company }}</h3></v-card-title
    >
    <v-card-text>
      <p class="text-muted text-start">
        Status:
        <v-chip
          :color="store.DetailMember.Available ? 'green' : 'blue'"
          :text="store.DetailMember.Available ? 'Available' : 'Unvailable'"
        >
        </v-chip>
      </p>
      <p class="text-muted text-start">
        Name:
        <v-skeleton-loader type="list-item">
          <strong>{{ store.DetailMember.Name }}</strong>
        </v-skeleton-loader>

      </p>
      <p class="text-muted">
        Birth: <strong>{{ store.DetailMember.Birth }}</strong>
      </p>
      <p class="text-muted text-start">
        Sex: <strong>{{ store.DetailMember.Sex }}</strong>
      </p>
      <p class="text-muted">
        Address: <strong>{{ store.DetailMember.Address }}</strong>
      </p>
      <p class="text-muted text-start">
        Contact: <strong>{{ store.DetailMember.Contact }}</strong>
      </p>
    </v-card-text>
  </v-card>
  <v-card class="mt-2">
    <v-toolbar class="bg-primary">
      <v-toolbar-title>Task of member</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          prepend-icon="mdi-plus"
          class="text-none text-subtitle-1"
          size="small"
          @click="store.AddDeviceDialog = true"
          >Add Device</v-btn
        >
      </v-toolbar-items>
    </v-toolbar>

    <v-card-text>
      <v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
      ></v-text-field>
      <v-data-table
        :headers="headers"
        :items="store.Tasks"
        :search="search"
      >
        <template v-slot:item.Device="{ item }">
          <td>{{ item.Device }} ({{ item.SeriDevice }})</td>
        </template>
        <template v-slot:item.Printhead="{ item }">
          <td>{{ item.Printhead }} ({{ item.SeriPrinthead }})</td>
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
        <template v-slot:bottom>
          <div class="text-center pt-2">
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
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
store.FetchDetailMember();
export default {
  data() {
    return {
      search: "",
      page: 1,
      pageCount: 10,
      headers: [
        {
          align: "start",
          key: "Date",
          sortable: false,
          title: "Date",
        },
        { key: "Status", title: "Status" },
        { key: "IDDevice", title: "Device" },
        { key: "Title", title: "Project" },
        { key: "Accessory", title: "Accessory" },
        { key: "Performance", title: "Result" },
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
  computed: {
    pageCount() {},
  },
  methods: {},
};
</script>
<style scoped>
.card-detail {
  color: "black";
  background: #e0e4ea;
  border-radius: 20px;
}
</style>

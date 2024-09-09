<template lang="">
  <v-card class="mt-2">
    <v-toolbar>
      <v-toolbar-title>Infomation</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        color="primary"
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
      <p><strong>Address: </strong>{{ store.DetailClient.Address }}</p>
      <p><strong>Manager: </strong>{{ store.DetailClient.Manager }}</p>
      <p><strong>Phone Number: </strong>{{ store.DetailClient.Contact }}</p>
      <p><strong>Email: </strong>{{ store.DetailClient.Email }}</p>
      <p><strong>Tax: </strong>{{ store.DetailClient.Tax }}</p>
    </v-card-text>
  </v-card>
  <v-card class="mt-2" height="auto">
    <v-toolbar>
      <v-toolbar-title>Device</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          color="primary"
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
      <v-app>
        <v-data-table
          :headers="headers"
          :items="store.DeviceClient"
          :search="search"
        >
          <template v-slot:item.Device="{ item }">
            <td>{{item.Device}} ({{item.SeriDevice}})</td>
          </template>
          <template v-slot:item.Printhead="{ item }">
            <td>{{item.Printhead}} ({{item.SeriPrinthead}})</td>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon
              small
              class="mr-2"
              @click.stop="store.EditDeviceDialog = true"
            >
              mdi-pencil
            </v-icon>
            <v-icon small @click.stop="deleteItem(item)"> mdi-delete </v-icon>
          </template>
          <template v-slot:bottom>
            <div class="text-center pt-2">
              <v-pagination v-model="page" :length="pageCount"></v-pagination>
            </div>
          </template>
        </v-data-table>
      </v-app>
    </v-card-text>
  </v-card>
</template>
<script setup>
import { useAppStore } from "@/stores/app";
</script>
<script>
const store = useAppStore();
store.FetchDeviceClient();
store.FetchDetailClient();
export default {
  data() {
    return {
      search: "",
      page: 1,
      pageCount: 10,
      headers: [
        {
          align: "start",
          key: "Device",
          sortable: false,
          title: "Device",
        },
        { key: "Printhead", title: "Printhead" },
        { key: "Code", title: "Code" },
        { key: "Fuel", title: "Fuel" },
        { key: "Accessory", title: "Accessory" },
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

<template lang="">
  <v-card class="mt-3">
    <v-toolbar>
      <v-toolbar-title>List Client</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          color="primary"
          prepend-icon="mdi-plus"
          class="text-none text-subtitle-1"
          size="small"
          @click="store.AddClientDialog = true"
          >Add Client</v-btn
        >
      </v-toolbar-items>
    </v-toolbar>
    <v-data-iterator
      :items="store.Clients"
      :items-per-page="10"
      :search="Search"
    >
      <template v-slot:header>
        <v-text-field
          class="p-5"
          v-model="Search"
          density="comfortable"
          placeholder="Search"
          prepend-inner-icon="mdi-magnify"
          variant="solo"
          clearable
          hide-details
        ></v-text-field>
      </template>
      <template v-slot:default="{ items }">
        <v-list lines="two">
          <v-list-item
            v-for="value in items"
            :key="value"
            :title="value.raw.Company"
            :subtitle="value.raw.Address"
            class="mx-auto p-2 mb-2 cursor-pointer"
            @click="
              store.DetailList(value.raw.id)"
          >
            <template v-slot:append>
              <v-btn
                color="grey-lighten-1"
                icon="mdi-information"
                variant="text"
              ></v-btn>
            </template>
          </v-list-item>
        </v-list>
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
    </v-data-iterator>
  </v-card>
</template>
<script setup>
import { useAppStore } from "@/stores/app";
</script>
<script>
const store = useAppStore();
store.FetchClient();
store.FetchDevice();
export default {
  data() {
    return {
      Search: "",
      page: 1,
    };
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

<template lang="">
  <v-dialog v-model="store.AddTaskDialog" max-width="700">
    <form
      v-on:submit.prevent="
        store.AddTask(
          TaskClient.Company,
          TaskClient.Address,
          TaskClient.Manager,
          TaskClient.Contact,
          SelectEngineer,
          Date,
          Title,
          Note
        )
      "
    >
      <v-card>
        <v-toolbar class="bg-primary" fixed-top>
          <v-toolbar-title>New Task</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-btn
              icon="mdi-close"
              @click="store.AddTaskDialog = false"
            ></v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-row>
            <v-col cols=10>
              <v-autocomplete
                v-model="SelectCompanys"
                label="Company"
                :items="store.Clients"
                item-title="Company"
                item-value="id"
                variant="outlined"
              ></v-autocomplete>
            </v-col>
            <v-col cols="2" class="mt-2">
              <v-btn color="primary" @click="LoadClient">Search</v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                v-model="TaskClient.Address"
                variant="outlined"
                label="Address"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="TaskClient.Manager"
                variant="outlined"
                label="Manager"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="TaskClient.Contact"
                type="number"
                variant="outlined"
                label="Phone Number"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-autocomplete
                v-model="SelectEngineer"
                label="Engineer"
                :items="store.EngineerAvailable"
                item-title="Name"
                item-value="Name"
                variant="outlined"
              ></v-autocomplete>
            </v-col>
            <v-col>
              <v-text-field
                v-model="TaskClient.Date"
                type="date"
                variant="outlined"
                label="Date"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-text-field
            v-model="Title"
            variant="outlined"
            label="Title"
          ></v-text-field>
          <v-textarea
            label="Note"
            variant="outlined"
            v-model="Note"
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn block color="primary" variant="flat" type="submit">SAVE</v-btn>
        </v-card-actions>
      </v-card>
    </form>
  </v-dialog>
</template>
<script setup>
import { useAppStore } from "@/stores/app";
</script>
<script>
const store = useAppStore();
store.FetchClient();
store.FetchMemberAvailable();
export default {
  data() {
    return {
      SelectCompanys: null,
      SelectEngineer: "",
      TaskClient: [],
      Title: "",
      Note: "",
      search: "",
      Url: "http://localhost:3000",
    };
  },
  computed: {},
  methods: {
    async LoadClient() {
      const res = await fetch(`${this.Url}/client/${this.SelectCompanys}`);
      this.TaskClient = await res.json();
    },
  },
};
</script>
<style lang=""></style>

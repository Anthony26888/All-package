<template lang="">
  <v-dialog v-model="store.DetailTaskDialog" max-width="700">
    <v-card>
      <v-toolbar class="bg-primary">
        <v-toolbar-title>Detail Task</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn
            icon="mdi-close"
            @click="store.DetailTaskDialog = false"
          ></v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-title>{{ store.DetailTasks.Title }}</v-card-title>
      <v-card-subtitle>{{ store.DetailTasks.Date }}</v-card-subtitle>
      <v-card-text style="height: 350px; overflow-y: scroll">
        <p class="text-muted text-start">
          Status:
          <v-chip :color="getColor(store.DetailTasks.Status)">
            {{ store.DetailTasks.Status }}
          </v-chip>
        </p>
        <p class="text-muted text-start">
          Company: <strong>{{ store.DetailTasks.Company }}</strong>
        </p>
        <p class="text-muted">
          Address: <strong>{{ store.DetailTasks.Address }}</strong>
        </p>
        <v-row>
          <v-col>
            <p class="text-muted">
              Manager: <strong>{{ store.DetailTasks.Manager }}</strong>
            </p>
          </v-col>
          <v-col>
            <p class="text-muted">
              Contact: <strong>{{ store.DetailTasks.Contact }}</strong>
            </p>
          </v-col>
        </v-row>
        <p class="text-muted">
          Note: <strong>{{ store.DetailTasks.Note }}</strong>
        </p>
        <v-divider></v-divider>
        <p class="text-muted">
          Engineer: <strong>{{ store.DetailTasks.Engineer }}</strong>
        </p>
        <v-row>
          <v-col>
            <p class="text-muted">Device:</p>
            <br />
            <strong>{{ store.DetailTasks.Perform }}</strong>
          </v-col>
          <v-col>
            <p class="text-muted">Seri:</p>
            <br />
            <strong>{{ store.DetailTasks.Perform }}</strong>
          </v-col>
        </v-row>
        <p class="text-muted">Result:</p>
        <strong>{{ store.DetailTasks.Perform }}</strong>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { useAppStore } from "@/stores/app";
</script>
<script>
const store = useAppStore();
export default {
  data() {
    return {};
  },
  watch: {
    loading(val) {
      if (!val) return;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
  methods: {
    getColor(Color) {
      if (Color == "To do") return "primary";
      else if (Color == "Progress") return "warning";
      else return "Success";
    },
  },
};
</script>
<style lang=""></style>

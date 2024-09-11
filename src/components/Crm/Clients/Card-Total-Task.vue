<template lang="">
  <v-row>
    <v-col>
      <v-card subtitle="To do">
        <v-card-text
          ><h1>{{ store.TasksTodo.length }}</h1></v-card-text
        >
      </v-card>
    </v-col>
    <v-col>
      <v-card subtitle="In progress">
        <v-card-text
          ><h1>{{ store.TasksProgress.length }}</h1></v-card-text
        >
      </v-card>
    </v-col>
    <v-col>
      <v-card subtitle="Done">
        <v-card-text
          ><h1>{{ store.TasksDone.length }}</h1></v-card-text
        >
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
import { useAppStore } from "@/stores/app";
</script>
<script>
const store = useAppStore();
store.FetchTasksTodo()
store.FetchTasksProgress()
store.FetchTasksDone()
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
<style lang=""></style>

<template lang="">
  <v-row>
    <v-col>
      <v-card subtitle="Total Client">
        <v-card-text><h1>{{store.Clients.length}}</h1></v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-card subtitle="Total Device">
        <v-card-text><h1>{{store.Devices.length}}</h1></v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
import { useAppStore } from "@/stores/app";
</script>
<script>
const store = useAppStore();
export default {
  data() {
    return {

    }
  },
  computed:{

  },
  methods: {

  },
};
</script>
<style lang=""></style>

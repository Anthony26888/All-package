<template lang="">
  <v-row>
    <v-col>
      <v-card subtitle="Member available">
        <v-card-text
          ><h1>{{ store.MemberAvailable.length }}</h1></v-card-text
        >
      </v-card>
    </v-col>
    <v-col>
      <v-card subtitle="Member unavailable">
        <v-card-text
          ><h1>{{ store.MemberUnavailable.length }}</h1></v-card-text
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
store.FetchMemberAvailable()
store.FetchMemberUnavailable()
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
<style lang=""></style>

<template lang="">
  <v-dialog v-model="store.check" width="auto" persistent>
    <v-card max-width="400">
      <v-card-title class="mx-auto">
        <v-icon class="icon-success" icon="mdi-check-circle-outline" size="x-large" color="success"></v-icon>
      </v-card-title>
      <v-card-text>
        <h3>Login Success</h3>
      </v-card-text>

      <template v-slot:actions>
        <v-btn
          class="ms-auto"
          text="OK"
          to="/Home"
          color="success"
          @click="store.ClosedSuccess"
          block
        ></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { useAppStore } from "@/stores/app";
const store = useAppStore();
</script>
<script>
export default {
  data() {
    return {
      dialog: true,
    };
  },
};
</script>
<style scoped>
  .icon-success{
    width:20px,
  }
</style>

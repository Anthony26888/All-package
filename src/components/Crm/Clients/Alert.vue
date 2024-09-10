<template lang="">
  <v-snackbar v-model="store.Alert" :timeout="timeout"  :color="store.ColorAlert">
    {{ store.TextAlert }}

    <template v-slot:actions>
      <v-icon @click="store.Alert = false">mdi-close</v-icon>
    </template>
  </v-snackbar>
</template>
<script setup>
import { useAppStore } from "@/stores/app";
</script>
<script>
const store = useAppStore();
export default {
  data() {
    return {
      timeout: 5000,
      snack:true
    }
  },
};
</script>
<style lang=""></style>

<template lang="">
  <v-dialog v-model="store.check" width="auto" persistent>
    <v-fade-transition hide-on-leave>
      <v-card class="mx-auto" elevation="16" width="400">
        <div class="py-12 text-center">
          <v-icon
            class="mb-6"
            color="success"
            icon="mdi-check-circle-outline"
            size="128"
          ></v-icon>

          <div class="text-h4 font-weight-bold">{{ store.StatusSuccess }}</div>
        </div>
        <v-card-actions>
          <v-btn color="success" variant="tonal" :to="store.DirectSuccess" block @click="store.check = false">
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-fade-transition>
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
.icon-success {
  width: 20px;
}
</style>
